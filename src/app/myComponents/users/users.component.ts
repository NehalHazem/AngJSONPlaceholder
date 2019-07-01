import { Component, OnInit } from '@angular/core';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      this.Users = data;
    });
  }

}
