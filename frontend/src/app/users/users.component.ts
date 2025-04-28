import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../service/user/user.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
