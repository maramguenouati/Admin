import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from '../Models/users.model';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {
  @Input() users?: Users;
  @Output() onRemoveUsers = new EventEmitter<number>();
  @Output() onEditUsers = new EventEmitter<number>();

  constructor() {
    this.users = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };
  }

  ngOnInit(): void {
    console.log(this.users);
  }

  deleteUsersClicked() {
    if (this.users?.id) {
      this.onRemoveUsers.emit(this.users.id);
    }
  }

  editUsersClicked() {
    if (this.users?.id) {
      this.onEditUsers.emit(this.users.id);
    }
  }
}
