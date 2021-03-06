import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable()
export class ProductService {
   constructor(private http: HttpClient) { }

   getAllBrandsAtoZ(): any {
      return this.http.get(environment.apiUrl + '/product/getbrands/a-to-z');
   }

   getAllBrandsByCount(): any {
      return this.http.get(environment.apiUrl + '/product/getbrands/by-product-count');
   }

   getAll(): any {
      return this.http.get(environment.apiUrl + '/product/');
   }

   getAllProductsForUser(username: string): any {
      return this.http.get(environment.apiUrl + '/product/stash/' + username);
   }

   getProductById(id: string){
      return this.http.get(environment.apiUrl + '/product/' + id);
   }

   getProductsByBrand(brand: string) {
      return this.http.get(environment.apiUrl + '/product/brands/' + brand);
   }

   getProductsByBrandAndCategory(brand: string, category: string) {
      return this.http.get(environment.apiUrl + '/product/brands/', {params: { brand: brand, category: category }});
   }

   getProductsByCategory(category: string) {
      return this.http.get(environment.apiUrl + '/product/category/' + category);
   }
}

