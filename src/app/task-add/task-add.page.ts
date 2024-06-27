import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.page.html',
  styleUrls: ['./task-add.page.scss'],
})
export class TaskAddPage implements OnInit {
  task!:Task;
  currentStatusValue!:string;

  taskForm:FormGroup = new FormGroup({
    desc: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }
    ),
    status: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }
    )
  });

  constructor(private service:TaskService,
     private navController:NavController) { }

  ngOnInit() {
  }

  savetask(){
    Preferences.get({ key: 'id' }).then((result:any)=>{
      var setting = {
        next:(res:any)=>{
          //go back to previous page
          // this.navController.back();
          alert("success");
        },
        error:(err:any)=>{
          console.log(err);
        },
      }
      console.log(result);
      this.task = {
        id: 0,
        personid : result.value,
        desc : this.taskForm.get("desc")?.value,
        status : this.taskForm.get("status")?.value
      };
      this.service.addtask(this.task).subscribe(setting);
    });
  }
  
  //Modal Events

  onIonChange(event: CustomEvent) {
    this.currentStatusValue = event.detail.value;
    // console.log(event);
  }

  onDidDismiss(event: CustomEvent) {
    // console.log(event);
    if(event.detail.role=="confirm"){
      this.taskForm.patchValue({
        status:event.detail.data
      });
    }
  }

}
