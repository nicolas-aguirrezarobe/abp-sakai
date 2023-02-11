import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleIndexComponent } from './role-index/role-index.component';

const routes: Routes = [{ path: '', component: RoleIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}