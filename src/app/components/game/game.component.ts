import { Component, OnInit } from '@angular/core';
import {DialogueService} from '../../services/dialogue.service';
import {Dialogue} from '../../_models/dialogue-model';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pathToAssets: string = "../../assets/";

  constructor(private dialogueService: DialogueService) { }

  ngOnInit() {
  }

  startGame() {
    const dialogueScenes = this.createStartDialogue();
    this.dialogueService.displayMultipleDialogues(dialogueScenes);
  }

  private createStartDialogue(): Dialogue[] {
    const character: string = "valery";
    const texts: string[] = [
      "Hello!<br>It's not often we get visitors...<br>You're in Towny... Population: 2!<br><br>What's your name?",
      "You must be feeling tired. How are you", "Please enter your name."];
    let dialogueScenes: Dialogue[] = [];

    for (let i = 0; i < texts.length; i++) {
      const dialogue = this.dialogueService.constructDialogue(character, texts[i]);
      dialogueScenes.push(dialogue);
    }

    return dialogueScenes;
  }

  buy(plot: number) {
    const dialogue = this.dialogueService.constructDialogue("Poo head", "lol!");
    this.dialogueService.displayDialogue(dialogue);
  }

}
