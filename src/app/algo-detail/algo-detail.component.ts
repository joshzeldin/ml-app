import { Component, OnInit, Input } from '@angular/core';
import { Algo } from '../algo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-algo-detail',
  templateUrl: './algo-detail.component.html',
  styleUrls: ['./algo-detail.component.css']
})
export class AlgoDetailComponent implements OnInit {

  private gridApi;

  @Input() algo: Algo;

  columnDefs = [
    {headerName: 'Parameter', field: 'name' },
    {headerName: 'Value', field: 'value' }
  ];

  parametize = function(param_values) {
    let params = String();
    for (const key in param_values) {
      if (param_values[key]) {
        params = params.concat(key + ' = ' + param_values[key] + ', ');
      }
    }
    return params.substring(0, params.length - 2);
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onGridReady(params): void {
    params.api.sizeColumnsToFit();
  }

}
