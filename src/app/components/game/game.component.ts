import { Component, OnInit } from '@angular/core';
import {DialogueService} from '../../_services/dialogue.service';
import {WebIdeService} from '../../_services/web-ide.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pathToAssets: string = "../../assets/";

  constructor(private dialogueService: DialogueService,
              private ideService: WebIdeService) { }

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
    this.ideService.open();
  }

}
