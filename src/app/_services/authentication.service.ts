import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable()
export class AuthenticationService {
   constructor(private http: HttpClient) { }

   login(username: string, password: string) {
      return this.http.post(environment.apiUrl + '/user/authenticate', { username: username, password: password })
   }

   logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
   }
}