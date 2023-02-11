import { PermissionService } from "@abp/ng.core";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AppMenuProvider {

  private MENU_ITEMS: any[] = [];

  constructor(private permissionService: PermissionService){
    this.MENU_ITEMS = [
      {
          label: 'Home',
          items: [
              {
                  label: 'Welcome',
                  icon: 'pi pi-fw pi-home',
                  routerLink: ['/dashboard'],
                  visible: true,
              }
          ],
      },
      {
          label: 'Security',
          items: [
              {
                  label: 'Users',
                  icon: 'pi pi-users',
                  routerLink: ['/users'],
                  visible: this.isGranted('AbpIdentity.Users'),
              },
              {
                  label: 'Roles',
                  icon: 'pi pi-shield',
                  routerLink: ['/roles'],
                  visible: this.isGranted('AbpIdentity.Roles'),
              }
          ],
      },
    ]
  }

  public provide(): any[]{
     return this.MENU_ITEMS;
  }

  private isGranted(permission: string): boolean {
    return this.permissionService.getGrantedPolicy(permission);
  }
}
