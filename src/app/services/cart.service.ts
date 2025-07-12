import { Injectable } from '@angular/core';
import { serverurl } from '../config/server';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/cart")
    }
    insert(ct:Cart):Observable<Cart>
    {
      return this.http.post<Cart>(serverurl+"/cart",ct)
    }
  
    deletereg(i:any):Observable<any>
    {
      return this.http.delete(serverurl+"/cart/"+i)
    }
    update(i:any,ct:Cart):Observable<Cart>
    {
      return this.http.put<Cart>(serverurl+"/cart/"+i,ct)
    }
    search(i:any):Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/cart/"+i)
    }
    searchem(em:any):Observable<Cart[]>
    {
      return this.http.get<Cart[]>(serverurl+"/cartemail/"+em)
    }
}
