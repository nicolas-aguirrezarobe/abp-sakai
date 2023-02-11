import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AppConsts } from '../../core/app-const';

export class DialogHelper {
  static getDialogConfig() {
    var dialogConfig = new DynamicDialogConfig();
    dialogConfig.width = AppConsts.formModalWidth;
    dialogConfig.baseZIndex = AppConsts.dialogBaseZIndex;
    return dialogConfig;
  }
}
