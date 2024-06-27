// import { Component, OnInit } from '@angular/core';
// import { Profile } from '../profile';

// @Component({
//   selector: 'app-profile-edit',
//   templateUrl: './profile-edit.page.html',
//   styleUrls: ['./profile-edit.page.scss'],
// })
// export class ProfileEditPage implements OnInit {
//   profile!:Profile;



//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CustomValidator } from '../custom-validator';
// import { Profile } from '../profile';
// import { ProfileService } from '../profile.service';
// import { NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-profile-edit',
//   templateUrl: './profile-edit.page.html',
//   styleUrls: ['./profile-edit.page.scss'],
// })
// export class ProfileEditPage implements OnInit {
//   profile!:Profile;

//   profileForm:FormGroup = new FormGroup({
//     name: new FormControl('', 
//       {
//         updateOn: 'blur',
//         validators: [
//           Validators.required,
//           Validators.minLength(3),
//         ]
//       }
//     ),
//     age: new FormControl('', 
//       {
//         updateOn: 'blur',
//         validators: [
//           Validators.required,
//           CustomValidator.integerValidator()
//         ]
//       }
//     ),
//     sex: new FormControl('', 
//       {
//         updateOn: 'blur',
//         validators: [
//           Validators.required,
//           Validators.maxLength(2)
//         ]
//       }
//     )
//   });

//   constructor(private service:ProfileService, private navController:NavController) { }

//   updateProfile(){
//     var setting = {
//       next:(res:any)=>{
//         //go back to previous page
//         this.navController.back();
//       },
//       error:(err:any)=>{
//         console.log(err);
//       },
//     }
//     this.profile.name = this.profileForm.get("name")?.value;
//     this.profile.age = this.profileForm.get("age")?.value;
//     this.profile.sex = this.profileForm.get("sex")?.value;
//     this.service.updateprofile(this.profile).subscribe(setting);
//   }

//   ngOnInit() {
//     var setting = {
//       next:(res:any)=>{
//         this.profileForm.patchValue(
//           {
//             name:res.data.name,
//             sex:res.data.sex,
//             age:res.data.age,
//           }
//         );
//         this.profile = res.data;
//         console.log(res);
//       },
//       error:(err:any)=>{
//         console.log(err);
//       },
//     }
//     this.service.getprofile(1).subscribe(setting);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../custom-validator';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  profile!:Profile;

  profileForm:FormGroup = new FormGroup({
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

  constructor(private service:ProfileService, private navController:NavController) { }

  updateProfile(){
    var setting = {
      next:(res:any)=>{
        //go back to previous page
        this.navController.back();
      },
      error:(err:any)=>{
        console.log(err);
      },
    }
    this.profile.name = this.profileForm.get("name")?.value;
    this.profile.age = this.profileForm.get("age")?.value;
    this.profile.sex = this.profileForm.get("sex")?.value;
    this.service.updateprofile(this.profile).subscribe(setting);
  }

  ngOnInit() {
    Preferences.get({ key: 'id' }).then((result:any)=>{
      var setting = {
        next:(res:any)=>{
          this.profileForm.patchValue(
            {
              name:res.data.name,
              sex:res.data.sex,
              age:res.data.age,
            }
          );
          this.profile = res.data;
          console.log(res);
        },
        error:(err:any)=>{
          console.log(err);
        },
      }
      this.service.getprofile(result.value).subscribe(setting);
    });
  }

}

