import {Component, OnInit} from '@angular/core';
import {WebIdeService} from "../../_services/web-ide.service";
import {SafeHtml} from "@angular/platform-browser";
import {Inventory, Resource, Task} from "../../_models/task-model";


@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {

  visible: boolean;
  task: Task;
  res: Resource[];
  inventory: Inventory[];
  activeView: boolean[] = [true, false, false, false, false];
  code: string;

  constructor(private ideService: WebIdeService) {}

  ngOnInit() {
    this.ideService.getState().subscribe(
      res => {
        this.visible = (res != null);
        this.task = res;
        this.res = (res != null ? res.resources : []); //array cannot == null
        this.inventory = (res != null ? res.inventory : []);
      }
    );
  }

  changeView(view: number) {
    var i;
    for (i = 0; i < this.activeView.length; i++) {
      this.activeView[i] = i == view;
    }
  }

  close() {
    if (confirm('Are you sure you want to close the code editor? You\'ll lose your progress!')) {
      this.changeView(0);
      this.ideService.close();
    }
  }
}
