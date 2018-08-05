import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services';
import { AuthGuard } from '../../_guards';

import {
   FormGroup,
} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../../environments/environment';
import { User } from '../../user';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   model: any = {};
   loading = false;
   returnUrl: string;
   isLoggedIn: boolean;
   loggedInUser: any;
   errorMessage: string;
   welcomeMessage: string;
   loginForm: FormGroup;

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authGuard: AuthGuard,
      private authenticationService: AuthenticationService,
      private http: HttpClient,
      private alertService: AlertService) { }

   ngOnInit() {
      this.isLoggedIn = this.authGuard.isLoggedIn();
   }

   login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)  
      .subscribe(data => {
         this.loggedInUser = data;

         if (this.loggedInUser.length > 0) {
            localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
            this.isLoggedIn = true;
            this.errorMessage = "";
            //You might think it would make more sense to use the user object we just retrieved.  Well, it doesn't like it when I type the result so it's a User object.  It also didn't like it when I assumed the type because it didn't know it was a User.  Rendered fine on the browser, just VS Code complains.  That's too much complaining from everything so this is what it is. 
            this.welcomeMessage = "Welcome, " + this.model.username;
         }
         else {
            this.isLoggedIn = false;
            this.errorMessage = "Invalid username or password";
            this.loading = false;
            
         }
      });
      
   }

   logout() {
      this.authenticationService.logout();
      this.isLoggedIn = false;
      this.welcomeMessage = "";
      this.errorMessage = "";
      this.loading = false;
      this.model.username = "";
      this.model.password = "";
   }
}
