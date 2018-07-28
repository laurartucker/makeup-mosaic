import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrandsComponent implements OnInit {

  brands: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/product/getbrands/by-product-count').subscribe(data => {
      this.brands = data;
    });
  }

}
