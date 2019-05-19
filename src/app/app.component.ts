import { User } from './class/user';
import { Login } from './class/login';
import { LoginComponent } from './page/login/login.component';
import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular';
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

