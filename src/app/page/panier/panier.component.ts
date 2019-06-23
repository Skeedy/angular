import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {CartRow} from '../../class/cart-row';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  private assocRows: CartRow[];
  private cartRow: CartRow;
  constructor(private cartServ: CartService) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.assocRows = cart.getList();
  }

  private getPrice() {
    return this.cartRow.nbCart * parseFloat(this.cartRow.priceAssoc);
  }
}
