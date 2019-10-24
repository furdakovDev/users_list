import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as UsersActions from './users.actions';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable()
export class UsersEffects {
  @Effect()
  fetchUsers = this.action$
    .pipe(ofType(UsersActions.FETCH_USERS))
    .pipe(switchMap(() => this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        observe: 'body',
        responseType: 'json',
      })))
    .pipe(map(response => {
      const users: User[] = [];

      response.forEach(({ id, name, email, address }) => {
        users.push({
          id,
          name,
          email,
          city: address.city,
        });
      });

      return {
        type: UsersActions.SET_USERS,
        payload: users,
      };
    }
    ));

  constructor(private action$: Actions, private http: HttpClient) {}
}
