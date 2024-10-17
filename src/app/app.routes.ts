import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ContactComponent} from "./features/contact/contact.component";
import {LoginComponent} from "./features/login/login.component";
import {RegisterComponent} from "./features/register/register.component";
import {ProductsComponent} from "./features/products/products.component";
import {authGuard} from "./interceptors/auth.guard";
import {ShoppingCartComponent} from "./features/shopping-cart/shopping-cart.component";
import {ShoppingCartItemComponent} from "./features/shoppin-cart-item/shopping-cart-item.component";
import {ProductStockComponent} from "./features/product-stock/product-stock.component";
import {NovedadProductComponent} from "./features/novedad-product/novedad-product.component";


export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    title: 'Home'
  },
  {
    path:'contact',
    component:ContactComponent,
    title: 'Contact'
  },
  {
    path:'login',
    component:LoginComponent,
    title: 'Login'
  },
  {
    path:'register',
    component:RegisterComponent,
    title: 'Register'
  },
  {
    path:'newProduct',
    component:NovedadProductComponent,
    title: 'Novedad Productos'
  },
  {
    path:'product',
    component: ProductsComponent,
    title: 'Products',
   canActivate: [authGuard],
    children: [
      {
        path:'shopping-cart',
        component:ShoppingCartComponent,
        title:'ShoppingCart'
      },
      {
        path:'shopping-cart-item',
        component:ShoppingCartItemComponent,
        title:'ShoppingCartItem'
      },
      {
        path:'stock',
        component: ProductStockComponent,
        title: 'Stock'
      },
    ]
  },
  {
    path:'**',
    redirectTo: 'home',
    pathMatch: "full"
  }
];
