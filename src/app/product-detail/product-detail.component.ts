import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserService } from '../_services/user.service';
import { ProductService } from '../_services/product.service';

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

   product: any;
   productId: any;
   relatedProducts: any;
   addChar: any;
   relatedProductsCategory: any;

   constructor(private router: Router, 
               private route: ActivatedRoute, 
               private http: HttpClient,
               private userService: UserService,
               private productService: ProductService) 
               { }


   ngOnInit() {
      this.productService.getProductById(this.route.snapshot.params['id']).subscribe(data => {
         this.product = data;
         this.productId = this.product._id;
         
         this.productService.getProductsByBrand(this.product.brand).subscribe(data => {
            this.relatedProducts = data;
         })
         
         this.productService.getProductsByCategory(this.product.sub_category).subscribe(data => {
            this.relatedProductsCategory = data; 
         })
      });

      
   }

   deleteProduct(id) {
      this.http.delete('/product/' + id)
         .subscribe(res => {
            this.router.navigate(['/products']);
         }, (err) => {
            console.log(err);
         }
         );
   }

   addProductToCollection() {
         this.userService.addProductToCollection(localStorage.getItem("username"), this.productId).subscribe(

         );
   }

}
