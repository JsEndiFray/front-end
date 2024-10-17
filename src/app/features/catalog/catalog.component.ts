import {Component} from '@angular/core';
import {CartItemIn} from "../../interface/cart-item";
import {CatalogProductsService} from "../../services/catalog-products.service";
import {CatalogProductComponent} from "../catalog-product/catalog-product.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CatalogProductComponent,
    RouterLink
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {


  constructor(
    private _catalogProductsService: CatalogProductsService
  ) {
  }
  get product(): CartItemIn[]{
    return this._catalogProductsService.products;
  }

}
