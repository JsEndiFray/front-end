import {Component, EventEmitter, Output} from '@angular/core';
import {ShoppingService} from "../../services/shopping.service";
import {Router, RouterLink} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";


@Component({
  selector: 'app-myShop',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink

  ],
  templateUrl: './myshop.component.html',
  styleUrl: './myshop.component.css'
})
export class MyShopComponent {
  //Para la visibilidad del carrito y el stock
  @Output() toggleCartVisibility = new EventEmitter<void>();
  @Output() toggleStockVisibility = new EventEmitter<void>();
  isCartVisible = false;
  isStockVisible = false;


  constructor(
    private _shoppingService: ShoppingService,
    private router: Router,
  ) {
  }

// Contador del carrito
  get itemsCount(): number {
    return this._shoppingService.itemsCount;
  }

//Para la visibilidad del carrito
  onCartClicked(): void {
    this.isCartVisible = !this.isCartVisible;
    this.toggleCartVisibility.emit();
  }

  // Visibilidad del componente del stock
  inStock(): void {
    this.isStockVisible = !this.isStockVisible;
    this.toggleStockVisibility.emit();
  }

  // para eliminar el token al cerrar la sesion
  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
