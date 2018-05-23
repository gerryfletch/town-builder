import {Component, OnInit, Input} from '@angular/core';
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  code: string;
  @Input() active: boolean;
  preview: SafeHtml;
  //task: Task; //use for saving code in the future? added identifier to Task model for this purpose

  private defaultTemplate: string;

  constructor() {
    this.defaultTemplate =
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      '    <body>\n        \n' +
      '    </body>\n'+
      '</html>';
  }

  ngOnInit() {
    this.code = this.defaultTemplate;
  }
}
