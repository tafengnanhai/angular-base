import { Component, inject } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { NgFor, CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [NgFor, CurrencyPipe, ReactiveFormsModule],
})
export class CartComponent {
  cartService = inject(CartService);
  items: Product[] = this.cartService.getItems();
  formBuilder = inject(FormBuilder);
  formData = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit() {
    this.cartService.clearCart();
    window.alert(
      'Success:' + this.formData.value.name + ',' + this.formData.value. address
    );
    this.formData.reset();
  }
}
