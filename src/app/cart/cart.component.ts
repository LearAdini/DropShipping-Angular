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
          details = this.cartService.getItems()
          alert('Success');
        }
      });
    }, 1);

    this.totalPrice = this.cartService.getPrice();
    console.log(this.cartService.getItems());
  }
  ngOnInit(): void {
  }

}
