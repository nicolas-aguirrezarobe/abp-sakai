// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import { TagModule } from 'primeng/tag';

// This Module's Components
import { UserMenuComponent } from './user-menu.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SidebarModule,
        AvatarModule,
        TagModule,
        ButtonModule
    ],
    declarations: [
        UserMenuComponent,
    ],
    exports: [
        UserMenuComponent,
    ]
})
export class UserMenuModule {

}
