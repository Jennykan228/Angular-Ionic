import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  login(login:string,password:string){
    return this.http.post("http://localhost:9000/login.php",JSON.stringify({login:login,password:password}));
  }

  register(profile:Profile){
    return this.http.post("http://localhost:9000/register.php",JSON.stringify(profile));
  }

}