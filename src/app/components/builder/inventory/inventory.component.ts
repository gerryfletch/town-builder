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

  constructor() { }

  ngOnInit() {
  }

}
