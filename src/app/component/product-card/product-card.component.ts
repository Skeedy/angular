import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {TypeService} from '../../service/type.service';
import {Router} from 'angular/router';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private auth: AuthService,
              private typeService: TypeService,
              private router: Router,
              private http: HttpClient,
              private cartServ: CartService) { }

  ngOnInit() {
    this.getAssocs();
  }

  getAssocs() {
    this.typeService.getAssocsByType()
        .subscribe((data) => {
          this.assocByTypes = data;
        });

    isConnected(): boolean {
      this.user = this.auth.currentUser;
      return this.auth.isConnected();
    }
}
