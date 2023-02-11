import { PagedResultDto } from '@abp/ng.core';
import { IdentityRoleDto, IdentityRoleService } from '@abp/ng.identity/proxy';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { DialogHelper } from 'src/app/shared/services/dialog-helper';
import { BaseIndexComponent } from 'src/app/core/base/base-index.component';
import { PermissionsFormComponent } from '../permissions-form/permissions-form.component';
import { RoleFormComponent } from '../role-form/role-form.component';

@Component({
  selector: 'role-index',
  templateUrl: 'role-index.component.html',
  styleUrls: ['role-index.component.scss'],
})
export class RoleIndexComponent extends BaseIndexComponent<IdentityRoleDto> {
  constructor(
    protected dialogService: DialogService,
    private roleService: IdentityRoleService,
    protected confirmationService: ConfirmationService
  ) {
    super(dialogService, confirmationService);
  }

  ngOnInit() {}

  public getSourceObservable(request: any): Observable<PagedResultDto<IdentityRoleDto>> {
    return this.roleService.getList(request);
  }

  getFormComponent() {
    return RoleFormComponent;
  }

  deleteObservable(id: number) {
    return this.roleService.delete(id + '');
  }

  permissions(role: IdentityRoleDto) {
    var dialogConfig = DialogHelper.getDialogConfig();
    dialogConfig.data = { id: role.name, readonly: role.isStatic };
    dialogConfig.header = 'Edit ' + role.name + ' permissions';
    const ref = this.dialogService.open(PermissionsFormComponent, dialogConfig);
  }
}
