import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import {TypePrice} from '../../class/type-price';
import {Assoc} from "../../class/assoc";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  private Rows: CartRow[];

  constructor(private cartServ: CartService) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.Rows = cart.getList();
  }
}