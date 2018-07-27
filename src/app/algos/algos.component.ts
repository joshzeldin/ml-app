import { Component, OnInit } from '@angular/core';

import { Algo } from '../algo';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-algos',
  templateUrl: './algos.component.html',
  styleUrls: ['./algos.component.css']
})
export class AlgosComponent implements OnInit {

  selectedAlgo: Algo;

  algos: Algo[];

  constructor(private algoService: AlgoService) { }

  ngOnInit() {
    this.getAlgos();
  }

  onSelect(algo: Algo): void {
    this.selectedAlgo = algo;
  }

  getAlgos(): void {
    this.algoService.getAlgos()
        .subscribe(algos => this.algos = algos);
  }
}