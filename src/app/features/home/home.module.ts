import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, ToolbarModule, BadgeModule],
})
export class HomeModule {}
