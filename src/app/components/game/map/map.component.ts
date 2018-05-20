import { Component, OnInit } from '@angular/core';
import {PropsService} from '../../../_services/props.service';
import {Prop} from '../../../_models/prop-model';
import {WebIdeService} from '../../../_services/web-ide.service';
import {BuilderComponent} from "../../builder/builder.component";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  pathToAssets: string = '../../assets/';
  props: Prop[];

  constructor(private ideService: WebIdeService,
              private propService: PropsService) { }

  ngOnInit() {
    this.propService.getProps()
      .subscribe(
        props => this.props = props
      );
  }

  clickProp(action: string) {
    if (action == null) return;
    eval('this.' + action);
  }

  buy(plot: number) {
    this.ideService.openCurrentTask();
  }

}
