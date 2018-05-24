import { Component, OnInit, Input } from '@angular/core';
import {Inventory} from "../../../_models/task-model";

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  @Input() inventory: Inventory[];
  @Input() active: boolean;
  pathToFile: string;

  buttonHover: boolean[] = [false,false,false,false];

  constructor() {
    this.pathToFile = "../../../../assets/img/inventory/";
  }

  setHover(hover: boolean, button: number) {
    var i;
    for (i = 0; i < this.buttonHover.length; i++) {
      if (i == button) {
        this.buttonHover[i] = hover;
      } else {
        this.buttonHover[i] = false;
      }
    }
  }

  ngOnInit() {
  }

}
