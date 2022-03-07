import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  product!: Product;

  addToCart(product: Product) {
    this.items.push(product);
  }

getPrice(){

    let total = 0;
    for(let item of this.items){
      total += (item.price - (item.price * item.sale / 100));
    }
    return total.toFixed(2).toString();

  //return//(this.items[0]?.price - (this.items[0]?.price * this.items[0]?.sale / 100)).toString();
}

getProudctPrice(){

  const total = (this.product?.price - (this.product?.price * this.product?.sale / 100)).toFixed(2);
return total;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
