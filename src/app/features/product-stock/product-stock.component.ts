import {Component, OnInit} from '@angular/core';
import {ApiProductStockService} from "../../services/api-product-stock.service";
import {DecimalPipe, NgForOf} from "@angular/common";
import {ProductBackend, stockIn} from "../../interface/product-backend";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-product-stock',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './product-stock.component.html',
  styleUrl: './product-stock.component.css'
})
export class ProductStockComponent implements OnInit {


  listProduct: stockIn[] = []

  constructor(
    private _apiProductService: ApiProductStockService,
    private _errorService: ErrorService,
  ) {

  }

  ngOnInit(): void {
    this.getStock();
  }


  // Configuracion para la conexion con el api a bd.
  getStock(): void {
    this._apiProductService.getStock().subscribe({
      next: (data: ProductBackend) => {
        this.listProduct = data.products;
      }, error: (error: HttpErrorResponse) => {
        this.listProduct = [];
        this._errorService.msjError(error);
      }
    });
  }
}
