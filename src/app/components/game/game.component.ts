import { Component, OnInit } from '@angular/core';
import {DialogueService} from '../../services/dialogue.service';
import {DialogueScene} from '../../_models/dialogue-model';

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

  private createStartDialogue(): DialogueScene[] {
    const character: string = "valery";
    const texts: string[] = [
      "Hello!<br>It's not often we get visitors...<br>You're in Towny... Population: 2!<br><br>What's your name?",
      "You must be feeling tired. How are you", "Please enter your name."];
    let dialogueScenes: DialogueScene[] = [];

    for (let i = 0; i < texts.length; i++) {
      const dialogue = this.dialogueService.constructDialogue(character, texts[i]);
      const dialogueScene = this.dialogueService.constructDialogueScene(dialogue, null);
      dialogueScenes.push(dialogueScene);
    }

    return dialogueScenes;
  }

  buy(plot: number) {
    const dialogue = this.dialogueService.constructDialogue("Poo head", "lol!");
    const dialogueScene = this.dialogueService.constructDialogueScene(dialogue, null);
    this.dialogueService.displayDialogue(dialogueScene);
  }

}
