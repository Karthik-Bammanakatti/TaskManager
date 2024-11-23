import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type Task } from '../../types/task-type';
import { CardComponent } from '../../shared/card-component/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.servics';
import { NewTaskData } from '../../types/add-task-type';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Task>();

  private taskService: TasksService = inject(TasksService);

  onComplete() {
    var audio = new Audio('assets/joke-drums-242242.mp3');
    audio.play();
    this.taskService.deleteTaskById(this.task.id);
  }

  onEdit() {
    console.log(this.task);
    this.edit.emit(this.task);
  }
}
