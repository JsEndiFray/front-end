import {CartItemIn} from "../interface/cart-item";

export function mapProductToCartItem(product: CartItemIn): CartItemIn {
  const {image, name, price} = product;
  return {image, name, price};
}
