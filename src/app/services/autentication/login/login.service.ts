import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.base_url;
  constructor(private http: HttpClient) {}

  Login(form: any) {
    console.log(form);
    let direccion = environment.base_url + 'auth';
    return this.http.post(direccion, form);
  }
}
