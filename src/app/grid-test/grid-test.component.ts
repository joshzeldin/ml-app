import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem,
  GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { Algo } from '../algo';

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
  algoscomponent: Object;

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.log('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.log('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid: GridsterComponent) {
    console.log('overlap', source, target, grid);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      pushItems: true,
      swap: false,
      minCols: 12,
      maxCols: 12,
      minRows: 8,
      maxRows: 8,
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

    this.algoscomponent = {cols: 2, rows: 8, y: 0, x: 0, minItemCols: 2, maxItemCols: 2, dragEnabled: false, algos: true};

    this.dashboard = [
      {cols: 2, rows: 8, x: 0, y: 0, minItemCols: 2, maxItemCols: 2, dragEnabled: false, algos: true},
      {cols: 7, rows: 1, x: 2, y: 7, dragEnabled: true, fileupload: true},
      {cols: 3, rows: 8, x: 9, y: 0, minItemCols: 3, dragEnabled: true, algodetail: true},
      {cols: 7, rows: 7, x: 2, y: 0, chart: true}
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
