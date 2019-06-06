import {Component, Input, OnInit} from '@angular/core';
import {CartRow} from '../../class/cart-row';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input() cartRow: CartRow;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    return this.cartRow.nbCart * parseFloat(this.cartRow.priceAssoc);
  }
}
