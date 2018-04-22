import {Component, Input, OnInit} from '@angular/core';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'prop', //Selects the <prop> tag 
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent {
    
  @Input() img: string; //URL to image
  @Input() coordinate: number; //position on screen 
    @Input() action: string;
    

  constructor(private http: Http) { 
  
  }
    
    public getProps() {
        this.http.get('assets/data/props.json')
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                }
        );
        
    }

}
