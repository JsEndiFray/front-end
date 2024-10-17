import {Injectable} from '@angular/core';
import {CartItemIn} from "../interface/cart-item";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  // El componente padre se encarga asignar los valor del arrays
  items: CartItemIn[] = [];

// contador del carrito
  get itemsCount(): number {
    return this.items.length;
  }

// Hace la suma el total de los articulos
  get total(): number {
    return this.items.reduce((acc, { price }) => (acc += price), 0);
  }
 // Agrega productos al carrito
  addItem(item: CartItemIn): void {
    this.items = [...this.items, item];
  }

// Elimina cada articulo del carrito.
  deleteItem(itemToDelete: CartItemIn):void {
    this.items = this.items.filter((item) => item !== itemToDelete);

  }

  constructor() {
  }
}
