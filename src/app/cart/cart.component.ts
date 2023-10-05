import { Component, inject } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [NgFor, CurrencyPipe],
})
export class CartComponent {
  cartService = inject(CartService);
  http = inject(HttpClient);
  items: Product[] = this.cartService.getItems();

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
