import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getprofile(id:number){
    return this.http.get("http://localhost:9000/getprofile.php?id="+id)
    
  }

  updateprofile(profile:Profile){
  return this.http.post("http://localhost:9000/updateprofile.php",JSON.stringify(profile));
}
}
