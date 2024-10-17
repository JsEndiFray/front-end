import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DecimalPipe, NgOptimizedImage} from "@angular/common";
import {CartItemIn} from "../../interface/cart-item";


@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DecimalPipe
  ],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
  //@Inpunt y @ Ouput pasamos la informacion al padre donde estan manejando lo objetos.

  @Input() cartItem?: CartItemIn;

  @Output() cartItemDelete = new EventEmitter<void>();

//Este metodo hace enviar informacion al padre para la eliminacion del articulo
  delete() {
    this.cartItemDelete.emit();
  }


}
