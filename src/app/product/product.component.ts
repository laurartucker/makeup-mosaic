import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ProductService } from '../_services/product.service';

@Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

   products: any;

   constructor(private http: HttpClient, private productService: ProductService) { }

   ngOnInit() {
      this.productService.getAll().subscribe(data => {
         this.products = data;
      });
   }

}
