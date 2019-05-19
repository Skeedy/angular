import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public connexionFailed = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    if (this.auth.isConnected()) {
      this.router.navigate(['/product']);
    }
   }

  ngOnInit() {
    this.loginForm = this.fb.group( {
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  login() {
    this.connexionFailed = false;
    const val = this.loginForm.value;
    if(val.username && val.password) {
      this.auth.login(val.username, val.password)
      .subscribe(
        () => {
           this.auth.profile()
            .subscribe(
                (user) => {
                  this.router.navigate(['/product']);
                },
                (err) => {
                  console.log(err);
                  this.connexionFailed = true;
                });
        },
        (err) => {
          console.log(err);
          this.connexionFailed = true;
      } );
    }
  }
}
