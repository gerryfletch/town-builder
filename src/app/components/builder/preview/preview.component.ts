import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() html: string;

  constructor() {}

  ngOnInit() {
  }

}
