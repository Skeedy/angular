import { Component, OnInit } from '@angular/core';
import {TitleService} from './service/title.service';
import { AuthService} from './service/auth.service';
import { MenuService} from './service/menu.service';
import { Globals} from './globals';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Restaurant';
  opened: boolean;
  user: User|null;
  constructor(private titleService: TitleService, private auth: AuthService) {}
  ngOnInit(): void {
    this.titleService.init();
  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  logout(): void {
    this.auth.logout();
  }
}
