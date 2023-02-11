import { AuthService, ConfigStateService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/app.layout.service';
import { MenuService } from 'src/app/layout/services/app.menu.service';

@Component({
    selector: 'user-menu',
    templateUrl: 'user-menu.component.html',
    styleUrls: ['user-menu.component.scss']
})
export class UserMenuComponent {

    currentUser: any;

    constructor(public layoutService: LayoutService, private authService: AuthService, private configService: ConfigStateService) { }

    ngOnInit() {
        this.currentUser = this.configService.getOne("currentUser");
        console.log(this.currentUser);
    }

    getInitals(): string{
        return  (this.currentUser?.name != null ? this.currentUser.name.charAt(0) : "" + 
                this.currentUser?.surname != null ? this.currentUser.surname.charAt(0) : "")
                .toUpperCase();
    }

    logout(){
        this.authService.logout().subscribe();
    }

    get visible(): boolean {
        return this.layoutService.state.userSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.userSidebarVisible = _val;
    }
}
