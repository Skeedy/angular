import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerFailed: boolean;
  private registrationDone: boolean;
  private loading: boolean;
  private registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authServ: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fname: [ null, Validators.required ],
      lname: [ null, Validators.required ],
      username: [ null],
      phone: [ null, Validators.required ],
      city: [ null, Validators.required ],
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')
      ]))
    });
  }

  get password() {
    return this.registerForm.get('password');
  }

  register() {
    const val = this.registerForm.value;
    this.loading = true;
    this.authServ.register(val).subscribe( () => {
      this.loading = false;
      this.registrationDone = true;
    }, () => {
      this.loading = false;
      this.registerFailed = true;
    });
  }
}
