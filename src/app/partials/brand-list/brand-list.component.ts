import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../_services/product.service';

@Component({
   selector: 'app-brand-list',
   templateUrl: './brand-list.component.html',
   styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
   brands: any;

   constructor(private http: HttpClient, private route: ActivatedRoute, private productService: ProductService) { }

   ngOnInit() {
      this.productService.getAllBrandsByCount().subscribe(data => {
         this.brands = data;
      });
   }

}
