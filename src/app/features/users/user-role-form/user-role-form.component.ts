import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  IdentityRoleDto,
  IdentityUserService,
  IdentityUserUpdateRolesDto,
} from '@abp/ng.identity/proxy';

@Component({
  selector: 'user-role-form',
  templateUrl: 'user-role-form.component.html',
  styleUrls: ['user-role-form.component.scss'],
})
export class UserRoleFormComponent {
  userId: number;
  roles: IdentityRoleDto[] = [];

  checked: boolean = false;

  selectedRoles: any[] = [];
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig,
    protected messageService: MessageService,
    protected identityService: IdentityUserService
  ) {}

  ngOnInit() {
    this.identityService.getRoles(this.config.data.id).subscribe(resp => {
      this.selectedRoles = resp.items;

      // for (const userRol of resp.items) {
      //     this.selectedRoles.push( userRol.name );
      // }
    });

    this.identityService.getAssignableRoles().subscribe(roles => {
      this.roles = roles.items;
    });
  }

  save() {
    const selectedRolesString = [];
    for (const userRol of this.selectedRoles) {
      selectedRolesString.push(userRol.name);
    }
    const input: IdentityUserUpdateRolesDto = {
      roleNames: selectedRolesString,
    };

    this.identityService.updateRoles(this.config.data.id, input).subscribe(resp => {
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Roles updated!',
      });
    });
  }
}
