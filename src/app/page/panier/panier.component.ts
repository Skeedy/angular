import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import { Time } from '../../class/time';
import {TimeService} from '../../service/time.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {User} from "../../class/user";
import { State } from "../../class/state";
import {Command} from "../../class/command";
import {Router} from '@angular/router';
import {Globals} from "../../globals";
import { MidiTimePipe } from '../../pipe/midi-time.pipe';
import { EveningTimePipe } from '../../pipe/evening-time.pipe';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  private rows: CartRow[];
  private times: Time[];
  private hour: Time;
  midiTime: any;
  timeSelected: any;
  user: User;
  loged: boolean;
  commandCheck: boolean;
  moment: string;
  test = [1, 4];
  selectFormControl = new FormControl('', Validators.required);
  private hourForm: FormGroup;
  constructor(private cartServ: CartService,
              private timeServ: TimeService,
              private auth: AuthService,
              private fb: FormBuilder,
              private router: Router
              ) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.rows = cart.getList();
    this.getTime();
    this.isConnected();
    this.checklogin();
    this.hourForm = this.fb.group({
      horaire: [ null, Validators.required ]});
    this.checkCurrentCommand();

  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  switchTime() {
    if (this.moment === 'midi') {
      this.timeSelected = this.times.filter((time: Time) => {
        return time.midi;
      });
    }
    if (this.moment === 'soir') {
      this.timeSelected = this.times.filter((time: Time) => {
        return !time.midi;
      });
    }
  }
  checklogin() {
    this.loged = this.isConnected();
    return this.loged;
  }
  getTime() {
    this.timeServ.getTime().subscribe(data => {
      this.times = data;
    });
  }
  checkCurrentCommand() {
    this.commandCheck = this.user.commands.filter( (command: Command) => {
      return command.state.value;
    }).some((command: Command) => {
      return command.state.value <= 2;
    });
  }
  private commander() {
    this.cartServ.addTime(this.hour);
    this.cartServ.commander({cartrows: this.rows, requestedHour: this.hour, price : this.cartServ.cart.getPrice() }).subscribe((data) => {
      this.router.navigate(['/command_success']);
      localStorage.removeItem('user-cart');
          });
  }
}
