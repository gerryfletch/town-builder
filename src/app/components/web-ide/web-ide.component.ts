import {Component, OnInit} from '@angular/core';
import {WebIdeService} from '../../_services/web-ide.service';
import {SafeHtml} from '@angular/platform-browser';
import {Task} from '../../_models/task-model';

@Component({
  selector: 'web-ide',
  templateUrl: './web-ide.component.html',
  styleUrls: ['./web-ide.component.scss']
})
export class WebIdeComponent implements OnInit {

  visible: boolean;
  code: string;
  preview: SafeHtml;
  task: Task;

  private defaultTemplate: string;

  constructor(private ideService: WebIdeService) {
    this.defaultTemplate =
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      '    <body>\n        \n' +
      '    </body>\n'+
      '</html>';
  }

  ngOnInit() {
    this.ideService.getState().subscribe(
      res => {
        this.visible = (res != null);
        this.task = res;
      }
    );

    this.code = this.defaultTemplate;

  }

  close() {
    if (confirm('Are you sure you want to close the code editor? You\'ll lose your progress!')) {
      this.ideService.close();
      this.code = this.defaultTemplate;
    }
  }

}
