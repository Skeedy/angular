import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Assoc} from '../../class/assoc';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  uri = Globals.APP_API + 'assoc/';
  assocByTypes: any;

  constructor(private typeService: TypeService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.getAssocs();
  }

  getAssocs() {
    this.typeService.getAssocsByType()
      .subscribe((data) => {
        this.assocByTypes = data;
      });
  }
}
