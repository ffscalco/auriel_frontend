import { Component, OnInit } from '@angular/core';

import { Task } from  './shared/task.model';

const TASKS: Array<Task> = [
  {id: 1, title: 'Do task 1'},
  {id: 2, title: 'Do task 2'},
  {id: 3, title: 'Do task 3'},
  {id: 4, title: 'Do task 4'},
  {id: 5, title: 'Do task 5'},
  {id: 6, title: 'Do task 6'},
  {id: 7, title: 'Do task 7'}
]

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks;
  public selectedTask: Task;

  public constructor() {

  }

  public ngOnInit() {
    this.tasks = TASKS;
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
