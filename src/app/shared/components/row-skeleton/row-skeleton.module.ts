// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

// This Module's Components
import { RowSkeletonComponent } from './row-skeleton.component';

@NgModule({
    imports: [
        CommonModule, 
        SkeletonModule
    ],
    declarations: [
        RowSkeletonComponent,
    ],
    exports: [
        RowSkeletonComponent,
    ]
})
export class RowSkeletonModule {

}
