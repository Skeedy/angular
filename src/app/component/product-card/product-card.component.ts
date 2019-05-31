import {Component, Input, OnInit} from '@angular/core';
import {Assoc} from '../../class/assoc';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';
import {CartService} from '../../service/cart.service';
import {Type} from '../../class/type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() assoc: Assoc;
  @Input() type: Type;
  user: User;
  quantity = 0;

  constructor(
      private auth: AuthService,
      private cartServ: CartService) { }

  ngOnInit() {
    const cart = this.cartServ.cart;
    cart.assocs.map( (assoc) => {
      if (assoc.id === this.assoc.id) {
        this.quantity ++;
      }
    });
  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }


  rmv(assoc: Assoc) {
    this.quantity --;
    this.cartServ.removeAssoc(assoc);
  }

  add(assoc: Assoc) {
    this.quantity ++;
    this.cartServ.addAssoc(assoc);
  }

  getQuantity(assoc) {
    return this.quantity;
  }

  disabled() {
    return this.quantity === 0;
  }
}
