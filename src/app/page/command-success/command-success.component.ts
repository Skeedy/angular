import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Globals} from '../../globals';

@Component({
  selector: 'app-command-success',
  templateUrl: './command-success.component.html',
  styleUrls: ['./command-success.component.scss']
})
export class CommandSuccessComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.refreshProfil();
  }
  private refreshProfil() {
    localStorage.removeItem('user-cart');
    localStorage.removeItem(Globals.APP_USER);
    this.auth.profile().subscribe();
  }
}
