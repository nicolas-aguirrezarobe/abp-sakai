// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

// This Module's Components
import { TableSkeletonComponent } from './table-skeleton.component';

@NgModule({
    imports: [
        CommonModule, 
        SkeletonModule
    ],
    declarations: [
        TableSkeletonComponent,
    ],
    exports: [
        TableSkeletonComponent,
    ]
})
export class TableSkeletonModule {

}
