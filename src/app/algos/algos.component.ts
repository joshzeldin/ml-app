import { Component, OnInit } from '@angular/core';
import { Algo } from '../algo';
import { AlgoService } from '../algo.service';

@Component({
  selector: 'app-algos',
  templateUrl: './algos.component.html',
  styleUrls: ['./algos.component.css']
})
export class AlgosComponent implements OnInit {

  algos: Algo[];

  constructor(private algoService: AlgoService) { }

  ngOnInit() {
    this.getAlgos();
    this.algoService.setAlgoId(1);
  }

  getAlgos(): void {
    this.algoService.getAlgos()
        .subscribe(algos => this.algos = algos);
  }
}
