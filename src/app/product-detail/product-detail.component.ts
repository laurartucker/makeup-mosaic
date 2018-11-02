import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserService } from '../_services/user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

   products: any;
   productId: any;

   constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private userService: UserService) { }

   ngOnInit() {
      this.http.get(environment.apiUrl + '/product/' + this.route.snapshot.params['id']).subscribe(data => {
         this.products = data;
         this.productId = this.products[0].name;
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
         this.userService.addProductToCollection(localStorage.getItem("username"), this.productId).subscribe();
   }

}
