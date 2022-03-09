import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../service/cart.service';
import { paypal, render } from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product!: Product;
  items = this.cartService.getItems();
  item: Product[] = [];
  totalPrice: any;

  constructor(private cartService: CartService) {

    setTimeout(() => {
      render({
        id: "#myPaypalButtons",
        currency: "USD",
        value: this.cartService.getPrice(),
        onApprove: (details) => {
          // details = this.cartService.getItems()
          alert('Success');
        }
      });
    }, 1);

    this.totalPrice = this.cartService.getPrice();

    this.getProducts();
  }
  ngOnInit(): void {

  }

  removeItem(index: number){
    this.cartService.clearProduct(index);
    this.totalPrice = this.cartService.getPrice();
  }

  getProducts() {
    const prodFromLS:any = localStorage.getItem('item');
    const product = JSON.parse(prodFromLS);
    this.cartService.setProduct(product);
  }

}
