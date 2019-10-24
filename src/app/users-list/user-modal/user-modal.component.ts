import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as UsersActions from '../../store/users.actions';
import { Store } from '@ngrx/store';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  @Input() public title;
  @Input() public userData;

  userForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<{ usersState: { users: User[] }}>
    ) {}


  initForm() {
    const user = this.userData || {};
    const name = user.name || '';
    const email = user.email || '';
    const city = user.city || '';

    this.userForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, [
        Validators.required,
        Validators.email,
      ]),
      city: new FormControl(city),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      if (this.userData) {
        this.store.dispatch(new UsersActions.EditUser({
          ...this.userForm.value,
          id: this.userData.id,
        }));
      } else {
        const id = `${Number(new Date())}`;
        this.store.dispatch(new UsersActions.AddUser({
          ...this.userForm.value,
          id,
        }));
      }
      this.cancelModal();
    }
  }

  deleteUser() {
    if (this.userData && this.userData.id) {
      this.store.dispatch(new UsersActions.DeleteUser(this.userData.id));
      this.cancelModal();
    }
  }

  cancelModal() {
    this.activeModal.close();
  }

  ngOnInit() {
    this.initForm();
  }
}
