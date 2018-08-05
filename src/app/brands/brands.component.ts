import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../_services/product.service';

@Component({
   selector: 'app-brands',
   templateUrl: './brands.component.html',
   styleUrls: ['./brands.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class BrandsComponent implements OnInit {

   brands: any;

   constructor(private http: HttpClient, private route: ActivatedRoute, private productService: ProductService) { }

   ngOnInit() {
      this.productService.getAllBrandsByCount().subscribe(data => {
         this.brands = data;
      });
   }

}
