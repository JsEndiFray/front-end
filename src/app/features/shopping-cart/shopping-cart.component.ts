import {Component} from '@angular/core';
import {ShoppingCartItemComponent} from "../shoppin-cart-item/shopping-cart-item.component";
import {CartItemIn} from "../../interface/cart-item";
import {ShoppingService} from "../../services/shopping.service";
import {DecimalPipe} from "@angular/common";


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    ShoppingCartItemComponent,
    DecimalPipe
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  constructor( private _shoppingService: ShoppingService) {
  }

// Los productos de arrays
  get cartItems(): CartItemIn[]{
    return this._shoppingService.items;
  }

  //La suma del importe del carrito
  get total() {
    return this._shoppingService.total;
  }

  // Elimina los articulos de los carritos
  deleteItem(itemToDelete: CartItemIn) {
    this._shoppingService.deleteItem(itemToDelete);
  }



}
