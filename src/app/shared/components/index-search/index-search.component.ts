import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index-search',
  templateUrl: 'index-search.component.html',
  styleUrls: ['index-search.component.scss'],
})
export class IndexSearchComponent {
  searchText = '';
  @Output() search = new EventEmitter();

  submit(event) {
    this.search.emit(this.searchText);
  }
}
