import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  users: Array<User> | undefined;
  userSubscription: Subscription | undefined;
  constructor(
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.userSubscription = this.UserService
      .getUsers()
      .subscribe((_users) => {
        this.users = _users;
      });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
