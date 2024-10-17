import {Injectable} from '@angular/core';
import {CartItemIn} from "../interface/cart-item";


@Injectable({
  providedIn: 'root'
})
export class CatalogProductsService {

  readonly products: CartItemIn[] = [
    {
      image: 'bajosAzul3.jpg',
      name: 'Zapatos Bajos',
      price: 50,
    },
    {
      image: 'botinAzul1.jpg',
      name: 'Zapatos Botin Azul',
      price: 69.99,
    },
    {
      image: 'sportColor1.jpg',
      name: 'Zapatos Sport',
      price: 99.99,
    },
    {
      image: 'botinVelcroVerde2.jpg',
      name: 'Zapatos Botin Verde',
      price: 79.99,
    },

  ];

  constructor() {
  }

}
