import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class WebIdeService {

  private visible$: Observable<boolean>;
  private visible: Subject<boolean>;

  constructor() {
    this.visible = new Subject<false>();
    this.visible$ = this.visible.asObservable();
  }

  public open() {
    this.visible.next(true);
  }

  public close() {
    this.visible.next(false);
  }

  public getState(): Observable<boolean> {
    return this.visible$;
  }

}
