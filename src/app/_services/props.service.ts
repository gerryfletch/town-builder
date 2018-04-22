import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PropsService {

      
    constructor(private http: Http) { 
    }
    
    public getProps() {
        
        console.log("started");
        
        this.http.get('assets/data/props.json')
        .map(results => results.json())
        .subscribe(
            gameProps => {
                console.log(gameProps);
            }
        );
    }
    
    

}



/*
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

  public displayDialogueByName(name: string) {
    this.http.get('assets/data/dialogue.json')
      .map(res => res.json())
      .subscribe(
        scenes => {  //scenes is a variable that has just been created
          if (!(name in scenes)) return; //returns if dialogu is not in array

          let scene = scenes[name];
          let dialogues: Dialogue[] = [];

          for (let i = 0; i < scene.texts.length; i++) {
            dialogues.push({author: scene.author, text: scene.texts[i]} as Dialogue);
          }

          this.displayMultipleDialogues(dialogues);
        });
  }

}*/