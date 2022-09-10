import { Component, OnInit } from '@angular/core';
import {Users} from "../model/Users";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersServiceService} from "../service/users-service.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: Users;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersServiceService) {
    this.user = new Users();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
