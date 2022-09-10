import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from "../service/users-service.service";
import {Users} from "../model/Users";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: Users[];
  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
    this.usersService.findAll().subscribe(data => {
      this.users = data;
    })
  }

}
