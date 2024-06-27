import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskAddPageRoutingModule } from './task-add-routing.module';

import { TaskAddPage } from './task-add.page';
import { TaskService } from '../task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskAddPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [TaskAddPage],
  providers: [TaskService]
})
export class TaskAddPageModule {}
