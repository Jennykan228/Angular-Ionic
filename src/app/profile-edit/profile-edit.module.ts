// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

// import { ProfileEditPage } from './profile-edit.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     ProfileEditPageRoutingModule
//   ],
//   declarations: [ProfileEditPage]
// })
// export class ProfileEditPageModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

import { ProfileEditPage } from './profile-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ProfileEditPage],
  providers: [ProfileService]
})
export class ProfileEditPageModule {}
