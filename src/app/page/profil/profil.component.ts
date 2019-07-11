import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
