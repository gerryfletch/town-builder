import { Component, OnInit } from '@angular/core';
import {DialogueService} from '../../_services/dialogue.service';

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
    this.dialogueService.getDialogueByName("start_game").subscribe(
      res => {
        this.dialogueService.displayMultipleDialogues(res);
      }
    );
  }

  buy(plot: number) {
  }

}
