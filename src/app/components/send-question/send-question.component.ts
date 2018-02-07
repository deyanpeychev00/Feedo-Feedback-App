import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {RouterAuthService} from "../../services/router-auth-service/router-auth.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {QuestionsServiceService} from "../../services/questions-service/questions-service.service";

@Component({
  selector: 'app-send-question',
  templateUrl: './send-question.component.html',
  styleUrls: ['./send-question.component.css']
})
export class SendQuestionComponent implements OnInit {
  username;
  question = '';
  receiverID;
  constructor(private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router,
              private routerAuth: RouterAuthService,
              private authService: AuthService,
              private questionsService: QuestionsServiceService) { }

  ngOnInit() {
    if (!this.routerAuth.canAccessUser()) {
      this.toastr.errorToast('You must be logged in to ask questions.');
      this.router.navigate(['/login']);
    } else {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.username = params['username'];
      });
      this.authService.getSpecificUser(localStorage.getItem('authtoken'), this.username)
        .subscribe(data =>{
          this.receiverID = data[0]._id;
        });
    }
  }

  sendQuestion(){
    if((this.question.trim()).length === 0){
      this.toastr.errorToast('Please type your question.');
    }else{
      this.questionsService.postSendQuestion(this.question, this.receiverID, localStorage.getItem('userId'), localStorage.getItem('username'))
        .subscribe(data => {
            this.toastr.successToast('Question sent successfully.');
          },
          err=>{
            this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
          });
    }
  }

  getBack(){
    window.history.back();
  }

}
