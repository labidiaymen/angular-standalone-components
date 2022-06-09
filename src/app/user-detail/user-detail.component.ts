import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  providers: [UserService],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.userProfile();
  }
}
