import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent {

  @Input() img: String;
  @Input() coordinate: number;

  constructor() { }

}
