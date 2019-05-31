import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Assoc} from '../../class/assoc';
import {TypeService} from '../../service/type.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  uri = Globals.APP_API + 'assoc/';
  assocByTypes: any;
  user: User;

  constructor(
      private auth: AuthService,
      private typeService: TypeService,
      private router: Router,
      private http: HttpClient,
      private cartServ: CartService
  ) {
  }

  ngOnInit() {
    this.getAssocs();
  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  getAssocs() {
    this.typeService.getAssocsByType()
      .subscribe((data) => {
        this.assocByTypes = data;
      });
  }

  rmv(assoc: Assoc) {
    this.cartServ.removeAssoc(assoc);
  }

  add(assoc: Assoc) {
    this.cartServ.addAssoc(assoc);
  }

  getQuantity(assoc) {
    return this.cartServ.getQuantity(assoc);
  }

  disabled() {
    return this.cartServ.cart.getTotalQuantity() === 0;
  }
}
