import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const appKey = "kid_r1F8-1S8z";
const appSecret = "1fd5800d385643c3aa218e5c2bb44d17";
const hostURL = "https://baas.kinvey.com";

@Injectable()
export class AuthService {
  emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private http: HttpClient) {}

  validateRegisterForm(username, email, password, repeatedPassword) {
    if (username === '' || username === null || username === undefined || username.length < 4) {
      return {
        success: false,
        error: 'Username should be at least 4 characters long.'
      };
    }
    if (!this.emailRegex.test(email) || email === '' || email === null || email === undefined) {
      return {
        success: false,
        error: 'Invalid email.'
      };
    }
    if (password === '' || password === null || password === undefined || password.length < 4) {
      return {
        success: false,
        error: 'Password should be at least 4 characters long.'
      };
    }
    if (password !== repeatedPassword){
      return {
        success: false,
        error: 'Password do not match.'
      };
    }

    return {
      success: true,
      error: ''
    };
  }

  register(username, email, password): Observable<any> {
    const body = JSON.stringify({username, email, password, isAdmin: false, questions: []});
    return this.http.post(`${hostURL}/user/${appKey}/`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${appKey}:${appSecret}`))
        .set('Content-Type', 'application/json')
    });
  }

  login(username, password): Observable<any> {
    const body = JSON.stringify({username, password});
    return this.http.post(`${hostURL}/user/${appKey}/login`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`${appKey}:${appSecret}`))
        .set('Content-Type', 'application/json')
    });
  }

  getCurrentUser(userId, authtoken): Observable<any> {
    return this.http.get(`${hostURL}/user/${appKey}/${userId}`, {
      headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
        .set('Content-Type', 'application/json')
    });
  }
}
