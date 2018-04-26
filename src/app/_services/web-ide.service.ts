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
  }

  public close() {
    this.visible.next(null);
  }

  public getState(): Observable<Task> {
    return this.visible$;
  }

  public displayIdeByTask(name: string) {
    this.http.get('assets/data/tasks.json')
      .map(res => res.json()[name] as Task)
      .subscribe(
        task => this.open(task)
      );
  }

}
