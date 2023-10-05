import { Component, inject } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
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
  items: Product[] = this.cartService.getItems();
}
