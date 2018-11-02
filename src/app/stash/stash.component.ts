import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
   selector: 'app-stash',
   templateUrl: './stash.component.html',
   styleUrls: ['./stash.component.scss']
})
export class StashComponent implements OnInit {

   products: any;

   constructor(private productService: ProductService) { 

   }

   ngOnInit() {
      var username = localStorage.getItem('username');
      this.productService.getAllProductsForUser(username).subscribe(data => {
         this.products = data;
      });;
   }

}
