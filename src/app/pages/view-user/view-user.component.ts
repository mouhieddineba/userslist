import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  user: User | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.isLoading = true; 
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;
          this.isLoading = false; 
        },
        (error) => {
          console.error(error);
          this.isLoading = false; 
        }
      );
    });
  }
  
  redirectToHomepage() {
    this.router.navigate(['/']); 
  }
  
}
