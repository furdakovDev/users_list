import { Action } from '@ngrx/store';
import { User } from '../shared/models/user.model';

export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export class FetchUsers implements Action {
  readonly type = FETCH_USERS;
}

export class SetUsers implements Action {
  readonly type = SET_USERS;
  payload: User[];
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class EditUser implements Action {
  readonly type = EDIT_USER;

  constructor(public payload: User) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: string) {}
}


