import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Preferences } from '@capacitor/preferences';
import { Task } from '../task';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasklist!:Task[];

  constructor(private service:TaskService) { }

  ngOnInit() {

  }
  
  ionViewWillEnter(){
    this.loadTaskList();
  }

  loadTaskList(){
    Preferences.get({ key: 'id' }).then((result:any)=>{
      var seing = {
        next:(rs:any)=>{
          this.tasklist = rs.data;
          console.log(rs);
        },
        error:(err:any)=>{
          console.log(err);
        },
      }
  
     this.service.gettasks(result.value).subscribe(seing);
    });
  }

  async deleteTask(id:number){

    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Are you sure to delete the task?`,
    });
  
    if(value){
      var setting = {
        next:(res:any)=>{
          this.loadTaskList();
          console.log(res);
        },
        error:(err:any)=>{
          console.log(err);
        },
      }

      this.service.deletetask(id).subscribe(setting);
    }

    
  }
}
