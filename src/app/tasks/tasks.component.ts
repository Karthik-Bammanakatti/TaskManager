import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.servics';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { type Task } from '../types/task-type';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, EditTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) name!: string;

  @Output() task = new EventEmitter<string>();

  isAddingTask = false;
  isEditingTask = false;

  selectedTask!: Task;

  private tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.selectedUserId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddingTask() {
    this.isAddingTask = false;
  }

  onCancelEditingTask() {
    this.isEditingTask = false;
  }

  onStartEditTask(task: Task) {
    this.selectedTask = task;
    this.isEditingTask = true;
  }

  onSubmitEditTask(task: Task) {
    this.selectedTask = task;
    this.isEditingTask = false;
    this.tasksService.saveTasks();
  }
}
