import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  code: string;
  @Input() active: boolean;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
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

  updatePreview() {
    //do something
    this.notify.emit(this.code);
  }

  ngOnInit() {
    this.code = this.defaultTemplate;
  }
}