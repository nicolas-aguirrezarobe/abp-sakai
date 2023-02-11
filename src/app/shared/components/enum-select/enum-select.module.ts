// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

// This Module's Components
import { EnumSelectComponent } from './enum-select.component';

@NgModule({
    imports: [
        FormsModule,
        DropdownModule
    ],
    declarations: [
        EnumSelectComponent,
    ],
    exports: [
        EnumSelectComponent,
    ]
})
export class EnumSelectModule {

}
