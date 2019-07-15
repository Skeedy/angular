import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { Command} from '../../class/command';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  private user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
  }

}
