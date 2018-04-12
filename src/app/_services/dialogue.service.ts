import {Injectable} from '@angular/core';
import {Dialogue, Dialogues} from '../_models/dialogue-model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DialogueService {

  private dialogues$: Observable<Dialogue[]>;
  private dialogues: Subject<Dialogue[]>;

  constructor(private http: Http) {
    this.dialogues = new Subject<Dialogue[]>();
    this.dialogues$ = this.dialogues.asObservable();
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

  public getDialogueByName(name: string): Observable<Dialogue[]> {
    return this.http.get('assets/data/dialogue.json')
      .map(res => {
        let scenes = res.json();
        if (name in scenes) {
          let scene = scenes[name];
          let dialogues: Dialogue[] = [];

          for (let i = 0; i < scene.texts.length; i++) {
            dialogues.push({author: scene.author, text: scene.texts[i]} as Dialogue);
          }

          return dialogues;
        }
        return null;
      });
  }

}
