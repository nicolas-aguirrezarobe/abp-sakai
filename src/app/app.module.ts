import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule, RestService } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ErrorHandler, ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { SharedModule } from './shared/shared.module';
import { CustomRestService } from './shared/services/custom-rest.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UsersService } from './shared/services/users.service';
import { AppLayoutModule } from './layout/app.layout.module';
import { MenuService } from './layout/services/app.menu.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale()
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    ThemeBasicModule.forRoot(),
    ToastModule,
    ChipsModule,
    ConfirmDialogModule,
    SharedModule,
    AppLayoutModule,
    DragDropModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: RestService, useClass: CustomRestService },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeAppFactory,
    //   deps: [UsersService],
    //   multi: true
    // },
    MenuService,
    MessageService,
    DialogService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializeAppFactory(usersService: UsersService) {
  // return () => usersService.load();
  return;
}
