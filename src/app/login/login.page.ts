import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { Profile } from '../profile';
import { AccountService } from '../account.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  profile!:Profile;

  profileForm:FormGroup = new FormGroup({
    login: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }
    ),
    password: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }
    )
  });

  constructor(private service:AccountService,
    private router:Router) { }

  ngOnInit() {
  }

  login(){
    var setting = {
      next:async (res:any)=>{
        if(res.result){
          //save person ID in localstorage
          await Preferences.set({key: 'id',value: res.data.id});
          //go to task list page if success
          this.router.navigate(['/task-list'])
        }
        else {
          alert("login failed");
        }
      },
      error:(err:any)=>{
        console.log(err);
      },
    }
    this.service.login(this.profileForm.get("login")?.value,this.profileForm.get("password")?.value).subscribe(setting);
  }

}
