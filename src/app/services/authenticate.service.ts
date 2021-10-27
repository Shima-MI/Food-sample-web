import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isAuthenticate: boolean= localStorage.getItem('token') ? true : false;
  readonly serviceUrl: string= environment.apiUrl+ "/Users/authenticate";
  constructor(private http: HttpClient) { }

  signin(model): Observable<any>{
    const apiUrl= `${this.serviceUrl}?userName=${model.userName}&password=${model.password}`
    return this.http.get<any>(apiUrl, model);
  }
}
