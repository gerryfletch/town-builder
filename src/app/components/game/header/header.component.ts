import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {DialogueService} from '../../../_services/dialogue.service';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  started: boolean;
  @Output() notifyStarted: EventEmitter<any> = new EventEmitter();

  constructor(private dialogueService: DialogueService) {
  }

  ngOnInit() {
  }

  startGame() {
    this.started = true;
    this.notifyStarted.emit();
    setTimeout(() => {
      this.dialogueService.displayDialogueByName('start_game');
    }, 1000);
  }

}
