import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../_services/product.service';


@Component({
   selector: 'app-a-z',
   templateUrl: './a-z.component.html',
   styleUrls: ['./a-z.component.scss']
 })
export class AZComponent implements OnInit {

   brands: any;

   constructor(private http: HttpClient, private route: ActivatedRoute, private productService: ProductService) { }

   ngOnInit() {
      this.productService.getAllBrandsAtoZ().subscribe(data => {
         this.brands = data;
      });
   }

}

