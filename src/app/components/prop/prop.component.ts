import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent {

  @Input() img: string;
  @Input() coordinate: number;

  constructor() { }

}
