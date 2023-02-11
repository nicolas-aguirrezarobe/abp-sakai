import { Injectable } from '@angular/core';
import { IdentityUserDto } from '../../proxy/volo/abp/identity/models';
import { map, shareReplay } from 'rxjs/operators';
import { UserCatalogService } from '@proxy/users/user-catalog.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users: IdentityUserDto[];

  private $users = this.identityUserService
    .getList({ maxResultCount: 1000, filters: null })
    .pipe(shareReplay());

  constructor(private identityUserService: UserCatalogService) {}

  public getUsers() {
    return this.$users.pipe(map(x => x.items));
  }
}
