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
  public getTasks(): Promise<Task[]> {
    let promise = new Promise((resolve, reject) => {
      if (TASKS.length > 0) {
        resolve(TASKS);
      } else {
        let error_msg = "There are no tasks.";
        reject(error_msg);
      }
    });

    return promise;
  }

  public getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS.slice(0, 3));
  }
}

