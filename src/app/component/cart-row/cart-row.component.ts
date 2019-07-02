import {Component, Input, OnInit} from '@angular/core';
import {CartRow} from '../../class/cart-row';
import {TypePrice} from '../../class/type-price';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input() cartRow: CartRow;

  constructor(private cartServ: CartService) {
  }

  ngOnInit() {
    this.calculPrice();
  }

  private addAssoc() {
    this.cartServ.addAssoc(this.cartRow.assoc);
  }

  private removeAssoc() {
    this.cartServ.removeAssoc(this.cartRow.assoc);
  }
  private addMenu() {
    this.cartServ.addMenu(this.cartRow.menu);
  }

  private removeMenu() {
    this.cartServ.removeMenu(this.cartRow.menu);
  }
  private delete() {
    this.cartRow.nbCart = 1;
    this.cartServ.removeAssoc(this.cartRow.assoc);
  }

  private calculPrice() {
    if (this.cartRow.assoc) {
      const price = this.cartRow.assoc.prices.find((price) => {
        return price.type.value === TypePrice.STANDARD;
      });
      this.cartRow.priceAssoc = price.value;
    }
    if (this.cartRow.menu) {
      const price = this.cartRow.menu.prices.find((price) => {
        return price.type.value === TypePrice.STANDARD;
      });
      this.cartRow.priceMenu = price.value;
    }
  }

  private getPrice() {
    if (this.cartRow.assoc) {
      return this.cartRow.nbCart * parseFloat(this.cartRow.priceAssoc);
    }
    if (this.cartRow.menu) {
      return this.cartRow.nbCart * parseFloat(this.cartRow.priceMenu);
    }
  }
}
