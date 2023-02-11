import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-skeleton',
    templateUrl: 'table-skeleton.component.html',
    styleUrls: ['table-skeleton.component.scss']
})
export class TableSkeletonComponent {
    @Input() cols: number;
    @Input() rows: number;
    @Input() dataSource: any;
}
