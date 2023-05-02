import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  base_url:string='https://fakestoreapi.com/products'

  constructor(private http:HttpClient) { }
  data()
  {
    return this.http.get(this.base_url)
  }
}
