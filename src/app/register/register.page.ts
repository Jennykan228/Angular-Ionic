import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { Profile } from '../profile';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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
    ),
    name: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }
    ),
    age: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required,
          CustomValidator.integerValidator()
        ]
      }
    ),
    sex: new FormControl('', 
      {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.maxLength(2)
        ]
      }
    )
  });


  constructor(private router:Router, private service:AccountService) { }

  ngOnInit() {
  }

  register(){
    var setting = {
      next:(res:any)=>{
        //go back to login page
        this.router.navigate(['/login']);
        //profile need to be clear
        alert("success");
        this.profile = {
          id:0,
          name:"",
          age:0,
          sex:"",
          login:"",
          password:""
        };
      },
      error:(err:any)=>{
        console.log(err);
      },
    }
    this.profile = {
      id:0,
      name:this.profileForm.get("name")?.value,
      age:this.profileForm.get("age")?.value,
      sex:this.profileForm.get("sex")?.value,
      login:this.profileForm.get("login")?.value,
      password:this.profileForm.get("password")?.value
    };
    this.service.register(this.profile).subscribe(setting);
  }
}
