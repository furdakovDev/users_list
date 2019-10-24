import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { usersReducer } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './users-list/user-item/user-item.component';
import { UserModalComponent } from './users-list/user-modal/user-modal.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserItemComponent,
    UserModalComponent,
    ButtonComponent,
  ],
  entryComponents: [
    UserModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([UsersEffects]),
    StoreModule.forRoot({ usersState: usersReducer }),
    NgbModule.forRoot()
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
