import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../_services/product.service';
@Component({
  selector: 'app-most-products',
  templateUrl: './most-products.component.html',
  styleUrls: ['./most-products.component.scss']
})
export class MostProductsComponent implements OnInit {

   brands: any;

   constructor(private http: HttpClient, private route: ActivatedRoute, private productService: ProductService) { }

   ngOnInit() {
      this.productService.getAllBrandsByCount().subscribe(data => {
         this.brands = data;
      });
   }

}
