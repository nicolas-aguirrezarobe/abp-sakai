import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IndexSearchModule } from './components/index-search/index-search.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { YesNoBoolPipe } from './pipes/yes-no-bool.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { UserNamePipe } from './pipes/user-name.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from "primeng/skeleton";
import { RowSkeletonModule } from './components/row-skeleton/row-skeleton.module';
import { TableSkeletonModule } from './components/table-skeleton/table-skeleton.module';
import { EnumSelectModule } from './components/enum-select/enum-select.module';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [YesNoBoolPipe, UserNamePipe, PermissionDirective],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    MenuModule,
    RippleModule,
    ButtonModule,
    MenubarModule,
    TabViewModule,
    TableModule,
    ToolbarModule,
    DropdownModule,
    DynamicDialogModule,
    DialogModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    IndexSearchModule,
    OverlayPanelModule,
    ChipModule,
    ChipsModule,
    BadgeModule,
    DividerModule,
    FileUploadModule,
    TreeModule,
    TagModule,
    TooltipModule,
    CheckboxModule,
    ColorPickerModule,
    AutoCompleteModule,
    CardModule,
    SkeletonModule,
    RowSkeletonModule,
    TableSkeletonModule,
    EnumSelectModule
  ],
  exports: [
    CoreModule,
    CheckboxModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    RippleModule,	
    TabViewModule,
    MenuModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    DropdownModule,
    DynamicDialogModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    IndexSearchModule,
    OverlayPanelModule,
    ChipModule,
    ChipsModule,
    BadgeModule,
    DividerModule,
    FileUploadModule,
    YesNoBoolPipe,
    UserNamePipe,
    TreeModule,
    TagModule,
    TooltipModule,
    ColorPickerModule,
    AutoCompleteModule,
    CardModule,
    SkeletonModule,
    RowSkeletonModule,
    TableSkeletonModule,
    EnumSelectModule,
    PermissionDirective
  ],
  providers: [],
})
export class SharedModule {}
