import { Component, OnInit, Input } from '@angular/core';
import { Algo } from '../algo';

@Component({
  selector: 'app-algo-detail',
  templateUrl: './algo-detail.component.html',
  styleUrls: ['./algo-detail.component.css']
})
export class AlgoDetailComponent implements OnInit {

  @Input()  algo: Algo;

  constructor() { }

  ngOnInit() {
  }

}
