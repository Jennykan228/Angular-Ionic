// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  gettask(id:number){
    return this.http.get("http://localhost:9000/gettask.php?id="+id);
  }

  gettasks(personid:number){
    return this.http.get("http://localhost:9000/gettasks.php?personid="+personid);
  }

  updatetask(task:Task){
    return this.http.post("http://localhost:9000/updatetask.php",JSON.stringify(task));
  }

  addtask(task:Task){
    return this.http.post("http://localhost:9000/addtask.php",JSON.stringify(task));
  }

  deletetask(id:number){
    return this.http.get("http://localhost:9000/deletetask.php?id="+id);
  }
}
