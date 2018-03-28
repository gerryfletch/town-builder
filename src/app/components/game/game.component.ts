import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  path: String = "../../assets/";

  constructor() { }

  ngOnInit() {
  }

  buy() {
    alert("BUY PLOT!")
  }
}
