import { Injectable } from '@angular/core';
import {Cart} from '../class/cart';
import {Assoc} from '../class/assoc';
import {Globals} from '../globals';
import {Menu} from '../class/menu';

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

  getAssocQuantity(assoc: Assoc) {
    return this.cart.getCartAssocQuantity(assoc);
  }

  getMenuQuantity(menu: Menu) {
    return this.cart.getCartMenuQuantity(menu);
  }

  getCart() {
    return this.cart;
  }

  addAssoc(assoc: Assoc) {
    this.cart.addAssoc(assoc);
    this.storageCart();
  }

  addMenu(menu: Menu) {
    this.cart.addMenu(menu);
    this.storageCart();
  }

  removeAssoc(assoc: Assoc) {
    this.cart.removeAssoc(assoc);
    this.storageCart();
  }
  removeMenu(menu: Menu) {
    this.cart.removeMenu(menu);
    this.storageCart();
  }
  private storageCart() {
    localStorage.setItem(Globals.APP_CART, JSON.stringify(this.cart));
  }
}
