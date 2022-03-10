import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  items: Product[] = [];
  product!: Product;

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
    // this.setProduct(product);
  }

  getPrice() {
    let total = 0;
    for (let item of this.items) {
      total += (item.price - (item.price * item.sale / 100));
    }
    return total.toFixed(2).toString();
  }

  getProudctPrice() {
    const total = (this.product?.price - (this.product?.price * this.product?.sale / 100)).toFixed(2);
    return total;
  }

  getItems() {
    return this.items;
  }

  clearProduct(index:number) {
   this.items.splice(index, 1);
  }


  // setProduct(product: Product){
  //   localStorage.setItem('item', JSON.stringify(product));
  // }

}
