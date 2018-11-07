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
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, ProductService } from './_services';
import { AZComponent } from './brands/a-z/a-z.component';
import { BrandListComponent } from './partials/brand-list/brand-list.component';

import { FormatCategory } from './format-strings.pipe';
import { SortMenuComponent } from './brands/partials/sort-menu/sort-menu.component';
import { MostProductsComponent } from './brands/most-products/most-products.component';
import { StashComponent } from './stash/stash.component';
import { ProductCardsComponent } from './partials/product-cards/product-cards.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './looks/add/add.component';
import { SmallProductCardsComponent } from './partials/small-product-cards/small-product-cards.component';

@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      ProductDetailComponent,
      ProductCreateComponent,
      ProductEditComponent,
      HeaderComponent,
      MenuComponent,
      ProductsByBrandComponent,
      LoginComponent,
      RegisterComponent,
      AlertComponent,
      AZComponent,
      BrandListComponent,
      FormatCategory,
      SortMenuComponent,
      MostProductsComponent,
      StashComponent,
      ProductCardsComponent,
      SidebarComponent,
      AddComponent,
      SmallProductCardsComponent
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
      },
      ProductService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
