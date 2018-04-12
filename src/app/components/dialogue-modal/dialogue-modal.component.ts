import {Component} from '@angular/core';
import {DialogueService} from '../../_services/dialogue.service';
import {Dialogue} from '../../_models/dialogue-model';

@Component({
  selector: 'dialogue-modal',
  templateUrl: './dialogue-modal.component.html',
  styleUrls: ['./dialogue-modal.component.scss']
})
export class DialogueModalComponent {
  visible: boolean;
  dialogues: Dialogue[];
  dialogue: Dialogue;

  constructor(dialogueService: DialogueService) {
    this.visible = false;
    dialogueService.getDialogues().subscribe((dialogues: Dialogue[]) => {
      this.dialogue = dialogues[0];
      dialogues.shift();
      this.dialogues = dialogues;
      this.visible = true;
    });
  }

  close() {
    this.dialogues = [];
    this.visible = false;
    this.dialogue = null;
  }

  hasNext(): boolean {
    return this.dialogues.length > 0;
  }

  next() {
    if (this.dialogues.length == 0) {
      this.close();
    } else {
      this.dialogue = this.dialogues[0];
      this.dialogues.shift();
    }

  }

}
