import { Component, Input } from '@angular/core';

@Component({
    selector: '[row-skeleton]',
    templateUrl: 'row-skeleton.component.html',
    styleUrls: ['row-skeleton.component.scss']
})
export class RowSkeletonComponent{
    @Input() cols: number;
    
}
