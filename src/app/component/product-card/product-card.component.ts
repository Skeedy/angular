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

  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }


  rmv(assoc: Assoc) {
    this.cartServ.removeAssoc(assoc);
  }

  add(assoc: Assoc) {
    this.cartServ.addAssoc(assoc);
  }

  getQuantity(assoc: Assoc) {
    return this.cartServ.getQuantity(assoc);
  }

  disabled(assoc: Assoc) {
    return this.cartServ.getQuantity(assoc) === 0;
  }
}
