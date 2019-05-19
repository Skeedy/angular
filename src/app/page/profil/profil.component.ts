import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { AuthService } from '../../service/auth.service';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  title = 'Angular';
  opened: boolean;
  user: User|null;
  constructor(private titleService: TitleService, private auth: AuthService) { }


  ngOnInit(): void {
    this.titleService.init();
    if (this.auth.currentUser) {
      this.user = this.auth.currentUser;
    }
  }
}
