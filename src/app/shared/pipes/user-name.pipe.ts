import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  constructor(private usersService: UsersService) {}

  transform(value: string, ...args: unknown[]): unknown {
    return this.usersService.getUsers().pipe(map(u => u.find(x => x.id == value).name));
  }
}
