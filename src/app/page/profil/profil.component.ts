import { Assoc } from './../../class/assoc';
import {Component, Input, OnInit, Output} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../class/user';
import {Router} from '@angular/router';
import { BasicFormComponent } from '../../component/basic-form/basic-form.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() showModal = false;
  private user: User;

  constructor(private auth: AuthService, private router: Router) {
      if (!this.auth.isConnected()) {
        this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.user = this.auth.currentUser;
  }

  receiveNewUser($event) {
    this.user = $event;
  }
}
