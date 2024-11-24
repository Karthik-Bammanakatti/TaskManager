import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { type Task } from '../../types/task-type';
import { TasksService } from '../tasks.servics';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Task>();

  private taskService: TasksService = inject(TasksService);
  audio = new Audio('assets/joke-drums-242242.mp3');

  onComplete() {
    this.audio.play();
    this.taskService.deleteTaskById(this.task.id);
  }

  onEdit() {
    console.log(this.task);
    this.edit.emit(this.task);
  }
}
