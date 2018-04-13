import {Component, OnChanges, OnInit} from '@angular/core';
import {WebIdeService} from '../../_services/web-ide.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'web-ide',
  templateUrl: './web-ide.component.html',
  styleUrls: ['./web-ide.component.scss']
})
export class WebIdeComponent implements OnInit, OnChanges {

  visible: boolean;
  code: string;
  preview: SafeHtml;

  private defaultTemplate: string;

  constructor(private ideService: WebIdeService,
              private sanitizer: DomSanitizer) {
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
        this.visible = res;
      }
    );

    this.code = this.defaultTemplate;

  }

  ngOnChanges() {
    // this.preview = this.sanitizer.bypassSecurityTrustHtml(this.code);
  }

  close() {
    if (confirm('Are you sure you want to close the code editor? You\'ll lose your progress!')) {
      this.ideService.close();
      this.code = this.defaultTemplate;
    }
  }

}
