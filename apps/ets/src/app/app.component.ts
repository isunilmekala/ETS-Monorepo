import { Component } from '@angular/core';
import { exampleProducts } from '@ets/products';

@Component({
  selector: 'ets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ets';
  products = exampleProducts;
}
