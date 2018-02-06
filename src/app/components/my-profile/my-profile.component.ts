import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {RouterAuthService} from "../../services/router-auth-service/router-auth.service";
import {Router} from "@angular/router";
import {QuestionsServiceService} from "../../services/questions-service/questions-service.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profileDataLoaded = false;
  questionsDataLoaded = false;
  myQuestions= [];
  username = localStorage.getItem('username');
  email = "";
  dateRegistered = "";

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private routerAuth: RouterAuthService,
              private router: Router,
              private questionsService: QuestionsServiceService) { }

  ngOnInit() {
    if(!this.routerAuth.canAccessUser()){
      this.router.navigate(['/']);
      this.toastr.errorToast('You don\'t have the right permissions to enter this page.');
    }else{
      this.authService.getCurrentUser(localStorage.getItem('userId'), localStorage.getItem('authtoken'))
        .subscribe( data =>{
            this.myQuestions = data.questions;
            this.email = data.email;
            this.dateRegistered = data._kmd.lmt.toString().substring(0, 10);
            this.profileDataLoaded = true;
              this.questionsService.getUserQuestions(localStorage.getItem('userId'), localStorage.getItem('authtoken'))
                .subscribe(data2 =>{
                  this.myQuestions = data2.sort((a,b) => a._kmd.lmt < b._kmd.lmt);
                  this.questionsDataLoaded = true;
                },
                  error2 => {
                    this.toastr.errorToast((error2.error.description ? error2.error.description : 'Unknown error occured. Please try again'));
                  });
          },
          err =>{
            this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
          });
    }

  }


}
