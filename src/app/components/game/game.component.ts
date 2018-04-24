import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
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
  started: boolean;
  pathToAssets: string = '../../assets/';

  constructor() {
  }

  ngOnInit() {

    let elementId = 'horizontal';
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

}
