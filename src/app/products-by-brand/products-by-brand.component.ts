import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
   selector: 'app-products-by-brand',
   templateUrl: './products-by-brand.component.html',
   styleUrls: ['./products-by-brand.component.scss'],
   
})
export class ProductsByBrandComponent implements OnInit {

   products: any;
   brandTitle: any;

   constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

   ngOnInit() {
      this.brandTitle = this.route.snapshot.params["brand"];
      this.http.get(environment.apiUrl + '/product/brands/' + this.brandTitle).subscribe(data => {
         this.products = data;

      });
   }



}
