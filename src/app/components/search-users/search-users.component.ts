import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {Router} from "@angular/router";
import {RouterAuthService} from "../../services/router-auth-service/router-auth.service";

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  userList = [];
  userListLoaded = false;

  searchedUsername: string;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router,
              private routerAuth: RouterAuthService) {
  }

  ngOnInit() {
    if (!this.routerAuth.canAccessUser()) {
      this.router.navigate(['/']);
      this.toastr.errorToast('You don\'t have the right permissions to enter this page.');
    } else {
      this.authService.getAllUsers(localStorage.getItem('authtoken'))
        .subscribe(data => {
            this.userList = data;
            this.userListLoaded = true;
          },
          err => {
            this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
          });
    }
  }

  searchUsers() {
    this.userListLoaded = false;
    this.authService.getUsersByUsername(localStorage.getItem('authtoken'), this.searchedUsername)
      .subscribe(data => {
          this.userList = data;
          this.userListLoaded = true;
        },
        err => {
          this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
        });
  }
}
