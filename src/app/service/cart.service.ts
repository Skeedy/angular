import { Injectable } from '@angular/core';
import {Cart} from '../class/cart';
import {Assoc} from '../class/assoc';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart;
  constructor() {
    this.cart = new Cart();
    const cartStrorage = JSON.parse(localStorage.getItem(Globals.APP_CART));
    this.cart = Object.assign(this.cart, cartStrorage);
  }

  getQuantity(assoc: Assoc) {
    return this.cart.getCartQuantity(assoc);
  }

  getCart() {
    return this.cart;
  }

  addAssoc(assoc: Assoc) {
    this.cart.addAssoc(assoc);
    this.storageCart();
    console.log(this.cart);
  }

  removeAssoc(assoc: Assoc) {
    this.cart.removeAssoc(assoc);
    this.storageCart();
    console.log(this.cart);
  }

  storageCart() {
    localStorage.setItem(Globals.APP_CART, JSON.stringify(this.cart));
  }
}
