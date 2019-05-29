import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Assoc} from '../../class/assoc';
import {AssocService} from '../../service/assoc.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isHidden = true;
  uri = Globals.APP_API + 'assoc/';
  assocs: Assoc[];

  constructor(private assocService: AssocService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getAssocs();
  }

  getAssocs() {
    this.assocService.getAssocsByType()
        .subscribe((data) => {
          console.log(data);
        });
  }
}
