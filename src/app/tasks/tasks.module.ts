import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    EditTaskComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent],
})
export class TasksModule {}
