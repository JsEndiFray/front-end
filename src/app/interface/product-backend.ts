export interface ProductBackend {
  msg: string;
  products: stockIn[];
}
export interface stockIn {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
