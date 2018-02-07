import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from "../../services/toastr-service/toastr.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from "@angular/router";
import {QuestionsServiceService} from "../../services/questions-service/questions-service.service";

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  @Input() question;

  constructor(private toastr: ToastrService,
              private authService: AuthService,
              private router: Router,
              private questionService: QuestionsServiceService) {
  }

  ngOnInit() {
  }

  deleteQuestion(){
    this.questionService.deleteSingleQuestion(this.question._id, localStorage.getItem('authtoken'))
      .subscribe(data => {
         this.toastr.successToast('Question deleted successfully.');
         this.router.navigate(['/search']);
      },
        err => {
          this.toastr.errorToast((err.error.description ? err.error.description : 'Unknown error occured. Please try again'));
        });
  }

}
