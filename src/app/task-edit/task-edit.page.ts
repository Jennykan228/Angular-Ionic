import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage implements OnInit {
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
     private navController:NavController,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    var idString = this.activatedRoute.snapshot.paramMap.get('id') as string;
    if(idString){
      var id:number = parseInt(idString);
      var setting = {
        next:(res:any)=>{
          this.taskForm.patchValue(
            {
              desc:res.data.desc,
              status:res.data.status
            }
          );
          this.task = res.data;
          console.log(res);
        },
        error:(err:any)=>{
          console.log(err);
        },
      }
      this.service.gettask(id).subscribe(setting);
    }
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
      this.task.desc = this.taskForm.get("desc")?.value;
      this.task.status = this.taskForm.get("status")?.value;
      this.service.updatetask(this.task).subscribe(setting);
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
