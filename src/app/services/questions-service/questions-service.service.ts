import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const appKey = "kid_r1F8-1S8z";
const appSecret = "1fd5800d385643c3aa218e5c2bb44d17";
const hostURL = "https://baas.kinvey.com";

@Injectable()
export class QuestionsServiceService {

  constructor(private http: HttpClient) {
  }

  getUserQuestions(userId, authtoken): Observable<any> {
    return this.http.get(`${hostURL}/appdata/${appKey}/questions/?query={"toUser":"${userId}"}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
        .set('Content-Type', 'application/json')
    });
  }

  deleteSingleQuestion(questionId, authtoken): Observable<any>{
    return this.http.delete(`${hostURL}/appdata/${appKey}/questions/${questionId}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
    });
  }

  postSendQuestion(questionContent, receiverID, senderID, senderUsername ): Observable<any> {
    const body = JSON.stringify({content: questionContent, senderID, fromUser: senderUsername, toUser: receiverID});
    return this.http.post(`${hostURL}/appdata/${appKey}/questions`, body, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
        .set('Content-Type', 'application/json')
    });
  }
}
