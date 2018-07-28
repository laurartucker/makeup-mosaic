import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';


import { AlertService, UserService } from '../_services/index';

@Component({
   moduleId: module.id,
   templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
   model: any = {};
   loading = false;
   users: any;

   constructor(private route: ActivatedRoute, private http: HttpClient,
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

   register() {
      this.loading = true;
      this.userService.create(this.model)
         .subscribe(
            data => {
               console.log('Registration successful');
            },
            error => {
               console.log(error);
               this.loading = false;
            });
   }

   ngOnInit() {
      this.userService.getAll().subscribe(users => this.users = users);
   }
}
