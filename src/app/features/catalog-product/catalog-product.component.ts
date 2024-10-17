import {Component, Input} from '@angular/core';
import {CartItemIn} from "../../interface/cart-item";
import {ShoppingService} from "../../services/shopping.service";
import {mapProductToCartItem} from "../../map-product/map-product-cart-item";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-catalog-product',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.css'
})
export class CatalogProductComponent {
  @Input() product!: CartItemIn;

  constructor(
    private _shoppingService: ShoppingService,
  ) {

  }

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this._shoppingService.addItem(cartItem);
  }

}
