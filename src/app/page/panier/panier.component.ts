import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import {TypePrice} from '../../class/type-price';
import {Assoc} from "../../class/assoc";
import { Time } from '../../class/time';
import {TimeService} from '../../service/time.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  private rows: CartRow[];
  private times: Time[];
  private hour: Time;
  private midi: boolean;

  constructor(private cartServ: CartService,
              private timeServ: TimeService) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.rows = cart.getList();
    this.getTime();
    console.log(this.hour);
  }
  getTime() {
    this.timeServ.getTime().subscribe(data => {
      this.times = data;
    });
    console.log(this.times);
  }
  private commander() {
    this.cartServ.addTime(this.hour);
    console.log(this.hour);
    this.cartServ.commander({cartrows: this.rows}).subscribe((data) => {
      console.log('Commande envoyée !');
    }, (err) => {
      console.log(err);
    });
  }
}
