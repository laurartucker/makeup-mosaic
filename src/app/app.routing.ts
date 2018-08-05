import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrandsComponent } from './brands/brands.component';
import { AZComponent } from './brands/a-z/a-z.component';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';


const appRoutes: Routes = [
   {
      path: 'products',
      component: ProductComponent,
      data: { title: 'Product List' }
   },
   {
      path: 'product-details/:id',
      component: ProductDetailComponent,
      data: { title: 'Product Details' }
   },
   {
      path: 'product-create',
      component: ProductCreateComponent,
      data: { title: 'Create Product' }
   },
   {
      path: 'product-edit/:id',
      component: ProductEditComponent,
      data: { title: 'Edit Product' }
   },
   {
      path:'brands',
      component: BrandsComponent,
      data: { title: 'Brands Available'}
   },
   {
      path:'brands/a-z',
      component: AZComponent,
      data: { title: 'Brands Available - A to Z'}
   },
   {
      path:'brands/by-count',
      component: BrandsComponent,
      data: { title: 'Brands Available - By Product Count'}
   },
   {
      path:'brands/:brand',
      component: ProductsByBrandComponent,
      data: { title: 'Viewing your favourite brand'}
   },
   {
      path: 'register',
      component: RegisterComponent,
      data: { title: 'Register with Makeup Mosaic'}
   },
   { 
      path: '', 
      component: ProductComponent
   },
   // otherwise redirect to home
   { path: '**', redirectTo: '' }

];

export const Routing = RouterModule.forRoot(appRoutes);
