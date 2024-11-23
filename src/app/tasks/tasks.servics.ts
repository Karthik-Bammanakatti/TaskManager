import { Injectable } from '@angular/core';
import { NewTaskData } from '../types/add-task-type';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features ',
      dueDate: '2025-12-20',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Test the changes',
      summary: 'Do regression testing for production release.',
      dueDate: '2024-12-18',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Create Jira tickets',
      summary: 'Create Jira tickets for all the user stories for next sprint.',
      dueDate: '2024-11-29',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTaskById(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.saveTasks();
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
