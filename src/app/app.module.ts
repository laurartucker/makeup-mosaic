import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';


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
      LoginComponent,
      RegisterComponent,
      AlertComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      Routing,
      CommonModule
   ],
   providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: JwtInterceptor,
         multi: true
      }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
