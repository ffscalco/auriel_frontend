import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const TASKS: Array<Task> = [
  {id: 1, title: 'Do task 1'},
  {id: 2, title: 'Do task 2'},
  {id: 3, title: 'Do task 3'},
  {id: 4, title: 'Do task 4'},
  {id: 5, title: 'Do task 5'},
  {id: 6, title: 'Do task 6'},
  {id: 7, title: 'Do task 7'}
]

@Injectable()

export class TaskService {
  public getTasks(): Array<Task> {
    return TASKS;
  }
}

