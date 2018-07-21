import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrandsComponent } from './brands/brands.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      ProductDetailComponent,
      ProductCreateComponent,
      ProductEditComponent,
      BrandsComponent,
      HeaderComponent,
      MenuComponent,
      ProductsByBrandComponent,
      RegisterComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      Routing
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
