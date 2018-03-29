import { Component, OnInit } from '@angular/core';
import {DialogueService} from '../../services/dialogue.service';
import {DialogueScene} from '../../_models/dialogue-model';

@Component({
  selector: 'dialogue-modal',
  templateUrl: './dialogue-modal.component.html',
  styleUrls: ['./dialogue-modal.component.scss']
})
export class DialogueModalComponent implements OnInit {
  visible: boolean;
  dialogues: DialogueScene[];
  current: DialogueScene;

  constructor(dialogueService: DialogueService) {
    this.visible = false;
    dialogueService.getDialogues().subscribe((dialogues: DialogueScene[]) => {
      this.current = dialogues[0];
      dialogues.shift();
      this.dialogues = dialogues;
      this.visible = true;
    });
  }

  ngOnInit() {
  }

  close() {
    this.dialogues = [];
    this.visible = false;
    this.current = null;
  }

  hasNext(): boolean {
    return this.dialogues.length > 0;
  }

  next() {
    this.current = this.dialogues[0];
    this.dialogues.shift();
  }

}
