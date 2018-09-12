import { Component, OnInit } from '@angular/core';
import { Algo } from '../algo';
import { AlgoService } from '../algo.service';

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  algos: Algo[] = [];

  constructor(private algoService: AlgoService) { }

  ngOnInit() {
  }

}
