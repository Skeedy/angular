import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import { Time } from '../../class/time';
import {TimeService} from '../../service/time.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {User} from "../../class/user";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  private rows: CartRow[];
  private times: Time[];
  private hour: Time;
  user: User;
  loged: boolean;
  selectFormControl = new FormControl('', Validators.required);
  private hourForm: FormGroup;

  constructor(private cartServ: CartService,
              private timeServ: TimeService,
              private auth: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.rows = cart.getList();
    this.getTime();
    this.isConnected();
    this.checklogin();
    this.hourForm = this.fb.group({
      horaire: [ null, Validators.required ]});

  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  checklogin() {
    this.loged = this.isConnected();
    return this.loged;
  }
  getTime() {
    this.timeServ.getTime().subscribe(data => {
      this.times = data;
    });
    console.log(this.times);
  }
  private commander() {
    this.cartServ.addTime(this.hour);
    console.log(this.hour);
    this.cartServ.commander({cartrows: this.rows, requestedHour: this.hour }).subscribe((data) => {
      console.log('Commande envoyée !');
    }, (err) => {
      console.log(err);
    });
  }
}
