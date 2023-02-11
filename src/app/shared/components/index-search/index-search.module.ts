// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';

// This Module's Components
import { IndexSearchComponent } from './index-search.component';

@NgModule({
  imports: [SharedModule, FormsModule],
  declarations: [IndexSearchComponent],
  exports: [IndexSearchComponent],
})
export class IndexSearchModule {}
