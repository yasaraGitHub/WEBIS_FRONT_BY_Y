import { Injectable } from '@angular/core';
//These components should be imported() in app.modules to modules array

import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user={};
  constructor(private http:HttpClient) { }
  registerUser(user){
    //defining headers
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/register',user,{headers:headers}).pipe(map((res:any)=>res));
  }
}
