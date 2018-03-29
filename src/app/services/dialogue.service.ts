import { Injectable } from '@angular/core';
import {Dialogue, DialogueScene, Input} from '../_models/dialogue-model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DialogueService {

  private dialogues$: Observable<DialogueScene[]>;
  private dialogues: Subject<DialogueScene[]>;

  constructor() {
    this.dialogues = new Subject<DialogueScene[]>();
    this.dialogues$ = this.dialogues.asObservable();
  }

  public constructDialogue(author: string, text: string): Dialogue {
    return {author, text};
  }

  public constructInput(placeholder: string): Input {
    return {placeholder};
  }

  public constructDialogueScene(dialogue: Dialogue, input: Input): DialogueScene {
    return {dialogue, input};
  }

  public displayDialogue(dialogue: DialogueScene) {
    this.dialogues.next([dialogue]);
    // this.dialogues.push(dialogue);
  }

  public displayMultipleDialogues(dialogues: DialogueScene[]) {
    this.dialogues.next(dialogues);
  }

  public getDialogues(): Observable<DialogueScene[]> {
    return this.dialogues$;
  }

}
