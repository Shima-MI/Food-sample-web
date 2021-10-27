import { Product } from './../models/productlist';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly apiUrl= `${environment.apiUrl}/Products`;

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
