import { Injectable } from '@angular/core';
import {Cart} from '../class/cart';
import {Assoc} from '../class/assoc';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart;
  constructor() {
    this.cart = new Cart();
  }

  getQuantity(assoc) {
    let nb = 0;
    this.cart.assocs.map( (as) => {
      if (as.id === assoc.id) {
        nb ++;
      }
    });
    return nb;
  }

  addAssoc(assoc: Assoc){
    this.cart.assocs.push(assoc);
  }

  removeAssoc(assoc: Assoc){
    const indexOf = this.cart.assocs.findIndex((a) => {
      return a.id === assoc.id;
    });
    if (indexOf > -1) {
      this.cart.assocs.splice(indexOf, 1);
    }
  }
}
