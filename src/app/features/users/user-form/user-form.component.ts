import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BaseFormComponent } from 'src/app/core/base/base-form.component';
import {
  IdentityUserDto,
  IdentityUserService,
  IdentityUserUpdateDto,
} from '@abp/ng.identity/proxy';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss'],
})
export class UserFormComponent extends BaseFormComponent<
  IdentityUserDto,
  CustomIdentityUserUpdateDto
> {
  bankId: number;

  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig,
    protected messageService: MessageService,
    protected identityService: IdentityUserService
  ) {
    super(formBuilder, dialogRef, config, messageService);
  }

  getSourceObservable() {
    return this.identityService.get(this.model.id.toString());
  }
  updateObservable(form: any) {
    return this.identityService.update(this.model.id.toString(), form);
  }
  createObservable(form: any) {
    return this.identityService.create(form);
  }
  buildForm() {
    console.log(this.model);
    console.log(this.method);

    this.form = this.formBuilder.group({
      userName: [this.model.userName || '', Validators.required],
      name: [this.model.name || '', Validators.required],
      surname: [this.model.surname || '', Validators.required],
      email: [this.model.email || '', Validators.email],
      password: [
        this.model.password || null,
        this.requiredIfValidator(() => this.method === 'create'),
      ],
      phoneNumber: [this.model.phoneNumber || ''],
      isActive: [true],
    });
  }
}

export interface CustomIdentityUserUpdateDto extends IdentityUserUpdateDto {
  id: string;
}
