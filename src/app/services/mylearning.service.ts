import { Injectable } from '@angular/core';
import { serverurl } from '../config/server';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mylearning } from '../models/mylearning';
@Injectable({
  providedIn: 'root'
})
export class MylearningService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Mylearning[]>
  {
    return this.http.get<Mylearning[]>(serverurl+"/mylearning")
  }
  insert(n:Mylearning):Observable<Mylearning>
  {
    return this.http.post<Mylearning>(serverurl+"/mylearning",n)
  }

  deletereg(i:any):Observable<any>
  {
    return this.http.delete(serverurl+"/mylearning/"+i)
  }
  update(i:any,r:Mylearning):Observable<Mylearning>
  {
    return this.http.put<Mylearning>(serverurl+"/mylearning/"+i,r)
  }
  search(i:any):Observable<Mylearning[]>
  {
    return this.http.get<Mylearning[]>(serverurl+"/mylearning/"+i)
  }
  searchemailid(emailid:any):Observable<Mylearning[]>
  {
    return this.http.get<Mylearning[]>(serverurl+"/mylearningemail/"+emailid)
  }
  
}
