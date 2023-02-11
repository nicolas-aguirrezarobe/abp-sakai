import { PagedResultDto } from '@abp/ng.core';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogHelper } from 'src/app/shared/services/dialog-helper';
import { Observable } from 'rxjs';
import { BaseIndexComponent } from 'src/app/core/base/base-index.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { IdentityUserDto, IdentityUserService } from '@abp/ng.identity/proxy';
import { UserRoleFormComponent } from '../user-role-form/user-role-form.component';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'user-index',
    templateUrl: 'user-index.component.html',
    styleUrls: ['user-index.component.scss'],
    providers: [DialogService]
})
export class UserIndexComponent extends BaseIndexComponent<IdentityUserDto> {
    constructor(protected dialogService: DialogService,
        private identityService: IdentityUserService,
        protected confirmationService: ConfirmationService) {
        super(dialogService, confirmationService);
    }

    ngOnInit() {
    }

    public getSourceObservable(request: any): Observable<PagedResultDto<IdentityUserDto>>{
        return this.identityService.getList(request);
    }

    getFormComponent() {
        return UserFormComponent;
    }

    deleteObservable(id: number) {
        return this.identityService.delete(id.toString());
    }

    permissions(id) {
        var dialogConfig = DialogHelper.getDialogConfig();
        dialogConfig.data = {id:id};
        dialogConfig.header = 'Edit Roles';
        const ref = this.dialogService.open(UserRoleFormComponent, dialogConfig);
    }
}


