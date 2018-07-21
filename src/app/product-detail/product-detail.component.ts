import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
   styleUrls: ['./product-detail.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

   products: any;

   constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

   ngOnInit() {
      this.http.get('/product/' + this.route.snapshot.params['id']).subscribe(data => {
         this.products = data;
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

}
