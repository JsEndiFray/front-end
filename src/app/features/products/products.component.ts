import {Component} from '@angular/core';
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";
import {MyShopComponent} from "../myshop/myshop.component";
import {CatalogComponent} from "../catalog/catalog.component";
import {RouterLink} from "@angular/router";
import {ProductStockComponent} from "../product-stock/product-stock.component";


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ShoppingCartComponent,
    MyShopComponent,
    CatalogComponent,
    RouterLink,
    ProductStockComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isCartVisible = false;
  isStockVisible = false;

  toggleStockVisibility(){
    this.isStockVisible = !this.isStockVisible;
  }

  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }


}
