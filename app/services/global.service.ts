import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import * as ApplicationSettings from "application-settings";

@Injectable()
export class GlobalService {

  private userSource = new BehaviorSubject<User>(new User());
  user = this.userSource.asObservable();

  set me(user: User) {
    ApplicationSettings.setString('account', JSON.stringify(user));
    this.userSource.next(user);
  }

}
