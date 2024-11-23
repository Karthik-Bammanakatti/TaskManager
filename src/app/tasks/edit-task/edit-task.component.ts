import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.servics';
import { Task } from '../../types/task-type';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  @Input({ required: true }) selectedTask!: Task;

  @Output() cancelEditingTask = new EventEmitter<void>();
  @Output() editTask = new EventEmitter<Task>();

  cancelAudio = new Audio('assets/sound-1-167181.mp3');
  submitAudio = new Audio('assets/game-start-6104.mp3');

  onCancelEditingTask() {
    this.cancelAudio.play();
    this.cancelEditingTask.emit();
  }

  onSubmitEditTask() {
    this.submitAudio.play();

    this.selectedTask.title = (<HTMLInputElement>(
      document.getElementById('title')
    )).value;
    this.selectedTask.summary = (<HTMLInputElement>(
      document.getElementById('summary')
    )).value;
    this.selectedTask.dueDate = (<HTMLInputElement>(
      document.getElementById('due-date')
    )).value;

    this.editTask.emit(this.selectedTask);
  }
}
