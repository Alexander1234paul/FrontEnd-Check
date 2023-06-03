import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/autentication/login/login.service';
import { Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  estado: boolean = false;
  resp: string = '';
  constructor(private loginServices: LoginService) {}

  ngOnInit(): void {}

  formLogin = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  public login(form: any) {
    this.loginServices.Login(form).subscribe((data: any) => {
      console.log(data);
      if (data.status == 'Error') {
        this.estado = true;
        this.resp = data.resp;
      } else {
        this.estado = false;
        
      }
    });
  }
}
