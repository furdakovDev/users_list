import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/models/user.model';
import { Store } from '@ngrx/store';
import { UserModalComponent } from './user-modal/user-modal.component';

import * as UsersActions from '../store/users.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  columns = ['Name', 'Email', 'City'];
  users: Observable<{ users: User[]}>;

  constructor(
    private modalService: NgbModal,
    private store: Store<{ usersState: { users: User[] }}>
  ) {}

  openModal() {
    const modalRef = this.modalService.open(UserModalComponent, { centered: true });
    modalRef.componentInstance.title = 'New user';
  }

  ngOnInit() {
    this.store.dispatch(new UsersActions.FetchUsers());
    this.users = this.store.select('usersState');
  }
}
