import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AppMenuProvider } from '../core/app-menu.provider';
import { LayoutService } from './services/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService, private appMenuProvider: AppMenuProvider) { }

    ngOnInit() {
        this.model = this.appMenuProvider.provide();
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = <HTMLDivElement>event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
          nodeElement.click();
          event.preventDefault();
        }
      }
}
