import {
  IdentityRoleCreateOrUpdateDtoBase,
  IdentityRoleDto,
  IdentityRoleService,
} from '@abp/ng.identity/proxy';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseFormComponent } from 'src/app/core/base/base-form.component';

@Component({
  selector: 'role-form',
  templateUrl: 'role-form.component.html',
  styleUrls: ['role-form.component.scss'],
})
export class RoleFormComponent extends BaseFormComponent<IdentityRoleDto, IdentityRoleEditDto> {
  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig,
    protected messageService: MessageService,
    protected roleService: IdentityRoleService
  ) {
    super(formBuilder, dialogRef, config, messageService);
  }

  getSourceObservable() {
    return this.roleService.get(this.model.id);
  }
  updateObservable(form: any) {
    return this.roleService.update(this.model.id, form);
  }
  createObservable(form: any) {
    return this.roleService.create(form);
  }
  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.model.name || '', Validators.required],
      isPublic: [this.model.isPublic || true, Validators.required],
      isDefault: [this.model.isDefault || false, Validators.required],
    });
  }
}

export interface IdentityRoleEditDto extends IdentityRoleCreateOrUpdateDtoBase {
  id?: string;
}
