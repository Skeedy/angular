import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import {TypePrice} from '../../class/type-price';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  private assocRows : CartRow[];
  constructor(private cartServ: CartService) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.assocRows = cart.getList();
  }
}
