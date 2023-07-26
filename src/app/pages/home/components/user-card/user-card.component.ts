import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit, OnDestroy {
  users: Array<User> | undefined;

  userSubscription: Subscription | undefined;

  constructor(private router: Router, private userService: UserService) {}

  @Input() user: User | undefined;

  redirectToViewUserModule() {
    this.router.navigate(['users', this.user?.id]);
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
