import { Component, OnInit, Input } from '@angular/core';
import { Algo } from '../algo';


@Component({
  selector: 'app-algo-detail',
  templateUrl: './algo-detail.component.html',
  styleUrls: ['./algo-detail.component.css']
})
export class AlgoDetailComponent implements OnInit {

  @Input()  algo: Algo;

  parametize = function(param_values){
    var params = String();
    for (var key in param_values) {
      if (param_values[key]) {
        params = params.concat(key + " = " + param_values[key] + ', ');
      }
    }
    return params.substring(0, params.length - 2);;
  }

  constructor() { }

  ngOnInit() {
  }

}
