import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import {Task} from '../_models/task-model';

@Injectable()
export class WebIdeService {

  private visible$: Observable<Task>;
  private visible: Subject<Task>;

  constructor(private http: Http) {
    this.visible = new Subject<Task>();
    this.visible$ = this.visible.asObservable();
  }

  private open(task: Task) {
    this.visible.next(task);
    this.nextTask();
  }

  public close() {
    this.visible.next(null);
    this.previousTask();
  }

  public getState(): Observable<Task> {
    return this.visible$;
  }

  public openCurrentTask() {
    this.http.get('assets/data/tasks.json')
      .map(res => res.json())
      .subscribe(
        res => {
          let i = 0, currentTask = this.getCurrentTask();
          for (let key in res) {
            if (i == currentTask) {
              this.open(res[key] as Task);
              break;
            }

            i++;
          }
        }
      )
  }

  private nextTask() {
    const task = this.getCurrentTask() + 1;
    localStorage.setItem('currentTask', '' + task)
  }

  private previousTask() {
    const task = this.getCurrentTask() - 1;
    localStorage.setItem('currentTask', '' + task);
  }

  private getCurrentTask(): number {
    let current = localStorage.getItem('currentTask');
    let task: number = 0;
    if (current != null) task = parseInt(current);

    return task;
  }

}
