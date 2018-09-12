import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem,
  GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { Algo } from '../algo';
import { AlgosComponent } from '../algos/algos.component';
import { AlgoDetailComponent } from '../algo-detail/algo-detail.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class GridTestComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  algo: Algo;

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.log('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.log('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid: GridsterComponent) {
    console.log('overlap', source, target, grid);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: GridTestComponent.eventStop,
        start: GridTestComponent.eventStart,
        dropOverItems: false,
        dropOverItemsCallback: GridTestComponent.overlapEvent,
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 1, rows: 8, y: 0, x: 0, dragEnabled: true, algos: true},
      {cols: 2, rows: 2, y: 0, x: 5, dragEnabled: true, fileupload: true},
      {cols: 3, rows: 8, y: 0, x: 1, dragEnabled: true, algodetail: true},
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  onAlgoSet(algo) {
    this.algo = algo;
  }
}
