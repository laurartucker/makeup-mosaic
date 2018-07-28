import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {

  product: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id) {
    this.http.get(environment.apiUrl + '/product/'+id).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct(id) {
    this.product.updated_date = Date.now();
    this.http.put(environment.apiUrl + '/product/'+id, this.product)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
