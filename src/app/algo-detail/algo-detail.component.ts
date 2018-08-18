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

  @Input()
  algo: Algo;

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
    private algoService: AlgoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlgoId();
  }

  getAlgoId(): void {
    this.algoService.getAlgoId()
      .subscribe(algoId => this.getAlgo(algoId));
  }

  getAlgo(id): void {
    if (id == null) {
      id = +this.route.snapshot.paramMap.get('id');
      this.algoService.getAlgo(id)
        .subscribe(algo => this.algo = algo);
    } else {
      this.algoService.getAlgo(id)
        .subscribe(algo => this.algo = algo);
    }
  }

}
