// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {
//   public appPages = [
//     { title: 'Profile', url: '/profile', icon: 'mail' },
//     { title: 'Profile-edit', url: '/profile-edit', icon: 'paper-plane' },
//     // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
//     // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
//     // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
//     // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
//   ];
//   // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
//   constructor() {}
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
   isLoggedIn:boolean=false;
   public appPages = [
    { title: 'Profile', url: '/profile', icon: 'mail' },
    { title: 'Profile-edit', url: '/profile-edit', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  
   constructor(private router:Router) {}
   
   async ngOnInit() {
      const idValue = await Preferences.get({ key: 'id' });
      if(idValue){
        this.isLoggedIn = true;
      }
   }

   async logout(){
    await Preferences.remove({key: 'id'});
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
   }
}
