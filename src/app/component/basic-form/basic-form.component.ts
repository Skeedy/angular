import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { User } from '../../class/user';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  private loading: boolean;
  private submitFailed: boolean;
  public userForm: FormGroup;
  private user: User;

  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.userForm = this.fb.group({
      email : new FormControl(this.user.email),
      fname: new FormControl(this.user.fname),
      lname: new FormControl(this.user.lname),
      phone: new FormControl(this.user.phone),
      city: new FormControl(this.user.city),
      password: new FormControl(this.user.password)
    });
  }

  saveProfile() {
    const val = this.userForm.value;
    this.loading = true;
    this.auth.saveProfile(val.fname, val.lname, val.phone, val.city, val.email, val.password)
      .subscribe( (user: User) => {
        this.loading = false;
        this.userForm.setValue({
          email: user.email,
          fname: user.fname,
          lname: user.lname,
          phone : user.phone,
          city : user.city,
          password : user.password,
        });
      }, () => {
        this.submitFailed = true;
        this.loading = false;
      });
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  profilUser() {
    this.user = this.auth.currentUser;
    return console.log(this.user);
  }

}
