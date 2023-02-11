import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PermissionsFormComponent } from './permissions-form/permissions-form.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleIndexComponent } from './role-index/role-index.component';
import { RoleRoutingModule } from './roles-routing.module';

@NgModule({
  imports: [SharedModule, RoleRoutingModule],
  declarations: [RoleIndexComponent, RoleFormComponent, PermissionsFormComponent],
  entryComponents: [RoleFormComponent, PermissionsFormComponent],
})
export class RoleModule {}
