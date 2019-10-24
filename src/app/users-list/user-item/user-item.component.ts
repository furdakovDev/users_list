import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() userData: User;

  constructor(private modalService: NgbModal) { }

  editUser() {
      const modalRef = this.modalService.open(UserModalComponent, { centered: true });
      modalRef.componentInstance.title = 'Edit user';
      modalRef.componentInstance.userData = this.userData;
  }

  ngOnInit() {}
}
