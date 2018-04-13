import {Component, OnInit} from '@angular/core';
import {DialogueService} from '../../_services/dialogue.service';
import {WebIdeService} from '../../_services/web-ide.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pathToAssets: string = '../../assets/';

  constructor(private dialogueService: DialogueService,
              private ideService: WebIdeService) {
  }

  ngOnInit() {


    function scrollHorizontally(e) {
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('horizontal').scrollLeft -= (delta * 40); // Multiplied by 40
      e.preventDefault();
    }

    if (document.getElementById('horizontal').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('horizontal').addEventListener('mousewheel', scrollHorizontally, false);
      // Firefox
      document.getElementById('horizontal').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    }

  }

  startGame() {
    this.dialogueService.getDialogueByName('start_game').subscribe(
      res => {
        this.dialogueService.displayMultipleDialogues(res);
      }
    );
  }

  buy(plot: number) {
    this.ideService.open();
  }

}
