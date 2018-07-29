import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services';
import { AuthGuard } from '../../_guards';

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

   constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authGuard: AuthGuard,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

   ngOnInit() {
      this.isLoggedIn = this.authGuard.isLoggedIn();
   }

   login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
         .subscribe(
            data => {
               this.router.navigate([this.returnUrl]);
            },
            error => {
               this.alertService.error(error);
               this.loading = false;
            });
   }
}
