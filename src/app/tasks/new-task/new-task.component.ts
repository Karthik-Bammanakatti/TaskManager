import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TasksService } from '../tasks.servics';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  @Output() cancelAddingTask = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancelAudio = new Audio('assets/sound-1-167181.mp3');
  submitAudio = new Audio('assets/game-start-6104.mp3');

  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  onCancelAddingTask() {
    this.cancelAudio.play();
    this.cancelAddingTask.emit();
  }

  onSubmitTask() {
    const task = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    this.tasksService.addTask(task, this.userId);
    this.submitAudio.play();
    this.onCancelAddingTask();
  }
}
