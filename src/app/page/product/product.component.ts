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
  assocByTypes: any;


  constructor(
      private typeService: TypeService,
      private router: Router,
      private http: HttpClient
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAssocs();
    }, 1000);
  }

  getAssocs() {
    this.typeService.getAssocsByType()
      .subscribe((data: any) => {
        this.assocByTypes = data;

      });
  }

}
