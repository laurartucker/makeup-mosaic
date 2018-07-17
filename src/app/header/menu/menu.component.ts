import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   brands = {};

   constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

   ngOnInit() {
      this.http.get('/product/getbrands').subscribe(data => {
         this.brands = data;
      });
   }

}
