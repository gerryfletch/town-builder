import { Component, OnInit, Input } from '@angular/core';
import {Resource} from "../../../_models/task-model";

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  @Input() res: Resource[];
  @Input() active: boolean;

  constructor() {}

  ngOnInit() {}

}
