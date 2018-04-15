import {Component, OnInit} from '@angular/core';
import {DialogueService} from '../../_services/dialogue.service';
import {WebIdeService} from '../../_services/web-ide.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style ({opacity: '0'}),
        animate ('1000ms ease-in-out', style({opacity: '1'}))
      ]),
      transition(':leave', [
        animate ('1000ms ease-in-out', style({opacity: '0'}))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {

  pathToAssets: string = '../../assets/';
  started: boolean;

  constructor(private dialogueService: DialogueService,
              private ideService: WebIdeService) {
    this.started = false;
  }

  ngOnInit() {
    // Game Horizontal Scroll
    let elementId = "horizontal";
    function scrollHorizontally(e) {
      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById(elementId).scrollLeft -= (delta * 40); // Multiplied by 40
      e.preventDefault();
    }

    if (document.getElementById(elementId).addEventListener) {
      document.getElementById(elementId).addEventListener('mousewheel', scrollHorizontally, false);
      document.getElementById(elementId).addEventListener('DOMMouseScroll', scrollHorizontally, false);
    }

  }

  startGame() {
    console.log("hello");
    this.started = true;
    setTimeout(() => {
      console.log("lol");
      this.dialogueService.displayDialogueByName('start_game');
    }, 1000);
  }

  buy(plot: number) {
    this.ideService.open();
  }

}
