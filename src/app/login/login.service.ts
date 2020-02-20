import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(userData): Observable <any> {
    return this.http.post('http://127.0.0.1:8000/loginRegister/',userData);
  }
}
