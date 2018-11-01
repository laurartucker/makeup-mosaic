import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
   constructor(private http: HttpClient) { }

   getAll() {
      return this.http.get(environment.apiUrl + '/user');
   }

   getById(id: String) {
      return this.http.get(environment.apiUrl + '/user/' + id);
   }

   create(user: User) {
      return this.http.post(environment.apiUrl + '/user', user);
   }

   update(user: User) {
      return this.http.put(environment.apiUrl + '/user/' + user.username, user);
   }

   delete(id: String) {
      return this.http.delete(environment.apiUrl + '/user/' + id);
   }

   addProductToCollection(username: String, productId: String) {
      return this.http.put(environment.apiUrl + '/user/add-to-collection/', { username: username, productId: productId });
   }


}

