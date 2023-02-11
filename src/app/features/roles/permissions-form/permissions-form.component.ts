import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  GetPermissionListResultDto,
  PermissionGrantInfoDto,
  PermissionGroupDto,
  PermissionsService,
  UpdatePermissionsDto,
} from '@proxy/volo/abp/permission-management';
import { MessageService, TreeNode } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'permissions-form',
  templateUrl: 'permissions-form.component.html',
  styleUrls: ['permissions-form.component.scss'],
})
export class PermissionsFormComponent {
  model: GetPermissionListResultDto;
  loading: boolean = false;
  saving: boolean = false;
  selected: TreeNode[];
  nodes: TreeNode[];
  readonly = false;

  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig,
    protected messageService: MessageService,
    protected permissionService: PermissionsService
  ) {}

  ngOnInit() {
    this.model = {} as GetPermissionListResultDto;
    this.model.entityDisplayName = this.config.data.id;
    this.readonly = this.config.data.readonly;
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.getSourceObservable()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(result => {
        this.model = result;
        this.buildForm();
      });
  }

  getSourceObservable() {
    return this.permissionService.get('R', this.model.entityDisplayName);
  }
  updateObservable(form: any) {
    return this.permissionService.update('R', this.model.entityDisplayName, form);
  }

  buildForm() {
    this.nodes = [];
    this.selected = [];
    this.exclude(this.model.groups).forEach(g => {
      var group = {} as TreeNode;
      group.selectable = !this.readonly;
      group.data = { type: 'group', name: g.name };
      group.label = g.displayName;
      (group.expandedIcon = 'pi pi-folder-open'),
        (group.collapsedIcon = 'pi pi-folder'),
        (group.children = this.buildChildNodes(null, g.permissions));
      if (g.permissions.every(x => x.isGranted)) {
        this.selected.push(group);
      } else if (g.permissions.some(x => x.isGranted)) {
        group.partialSelected = true;
      }
      this.nodes.push(group);
    });
  }

  exclude(groups: PermissionGroupDto[]) {
    const excluded = ['FeatureManagement', 'SettingManagement', 'AbpTenantManagement'];
    return groups.filter(x => !excluded.includes(x.name));
  }

  buildChildNodes(parentName: string, permissions: PermissionGrantInfoDto[]): TreeNode[] {
    var childrens = permissions.filter(x => x.parentName == parentName);
    var result: TreeNode[] = [];
    childrens.forEach(p => {
      var permission = {} as TreeNode;
      permission.selectable = !this.readonly;
      permission.data = { type: 'permission', name: p.name };
      permission.label = p.displayName;
      if (p.isGranted) {
        this.selected.push(permission);
      }
      permission.children = this.buildChildNodes(p.name, permissions);
      result.push(permission);
    });
    return result;
  }

  getChildNodes(node: TreeNode, childs: TreeNode[]) {
    childs.push(node);
    node.children.forEach(p => this.getChildNodes(p, childs));
  }

  save() {
    var all: TreeNode[] = [];
    var form = {} as UpdatePermissionsDto;
    form.permissions = [];
    this.nodes.forEach(p => this.getChildNodes(p, all));
    all
      .filter(x => x.data.type == 'permission')
      .forEach(x => {
        if (this.selected.includes(x))
          form.permissions.push({ name: x.data.name, isGranted: true });
        else form.permissions.push({ name: x.data.name, isGranted: false });
      });

    this.permissionService.update('R', this.model.entityDisplayName, form).subscribe(x => {
      this.dialogRef.close(x);
      this.messageService.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Role edited!',
      });
    });
  }
}

export interface PermissionsEditDto extends UpdatePermissionsDto {
  id?: string;
}
