import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskEditPageRoutingModule } from './task-edit-routing.module';

import { TaskEditPage } from './task-edit.page';
import { TaskService } from '../task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskEditPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [TaskEditPage],
  providers: [TaskService]
})
export class TaskEditPageModule {}
