import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../environments/environment.development";
import {ProductBackend} from "../interface/product-backend";


@Injectable({
  providedIn: 'root'
})
export class ApiProductStockService {
  private appUrl: string;
  private appProduct: string;

  constructor(private http: HttpClient) {
    this.appUrl = environments.endpoint;
    this.appProduct = 'product';
  }


  getStock(): Observable<ProductBackend> {
    //acceso a la base de datos
    return this.http.get<ProductBackend>(`${this.appUrl}${this.appProduct}`);
  }
/*
  getCatalogProduct(): Observable<ProductBackend>{
    return this.http.get<ProductBackend>(`${this.appUrl}${this.appProduct}`)
  }

 */
}
