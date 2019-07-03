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

  private rows: CartRow[];

  constructor(private cartServ: CartService) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.rows = cart.getList();
    console.log(this.rows);
  }
  private commander(){
    this.cartServ.commander({ cartrows : this.rows }).subscribe( (data) => {
      console.log(data);
    });
  }
}
