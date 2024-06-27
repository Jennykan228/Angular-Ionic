// import { Component, OnInit } from '@angular/core';
// import { Profile } from '../profile';
// import { ProfileService } from '../profile.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.page.html',
//   styleUrls: ['./profile.page.scss'],
// })
// export class ProfilePage implements OnInit {
//   profile:Profile = {id:0,name:"--",age:0,sex:"--"};
  

//   constructor(private service:ProfileService) { }

//   ngOnInit() {
//     var setting = {
//       next:(res:any)=>{
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
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile:Profile = {id:0,name:"--",age:0,sex:"--"};

  constructor(private service:ProfileService) { }

  ngOnInit() {
    Preferences.set({key: 'id',value: '1'});
  }

  ionViewWillEnter(){
    Preferences.get({ key: 'id' }).then((result:any)=>{
      var setting = {
        next:(res:any)=>{
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