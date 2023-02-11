import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserRoutingModule } from './user-routing.module';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [UserIndexComponent, UserFormComponent, UserRoleFormComponent],
  entryComponents: [UserFormComponent, UserRoleFormComponent],
})
export class UserModule {}
