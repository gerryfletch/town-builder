import { Injectable } from '@angular/core';
import {Dialogue} from '../_models/dialogue-model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DialogueService {

  private dialogues$: Observable<Dialogue[]>;
  private dialogues: Subject<Dialogue[]>;

  constructor() {
    this.dialogues = new Subject<Dialogue[]>();
    this.dialogues$ = this.dialogues.asObservable();
  }

  public constructDialogue(author: string, text: string): Dialogue {
    return {author, text};
  }

  public displayDialogue(dialogue: Dialogue) {
    this.dialogues.next([dialogue]);
  }

  public displayMultipleDialogues(dialogues: Dialogue[]) {
    this.dialogues.next(dialogues);
  }

  public getDialogues(): Observable<Dialogue[]> {
    return this.dialogues$;
  }

}
