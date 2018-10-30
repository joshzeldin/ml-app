import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public graph = {
    data: [
        { name: 'abc',
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y: [2, 3, 5, 4, 9, 11, 9, 7, 6, 10],
          type: 'bar',
          marker: {color: '#D07F23'}
        },
        { name: 'def',
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y: [2, 2.5, 4, 4.5, 6.5, 10, 10, 8, 6.5, 8],
          type: 'scatter',
          mode: 'lines+points',
          line: {color: '#1D8430'}
        },
    ],
    layout: {
      title: 'Performance Metrics',
      titlefont: {
        color: 'rgb(170, 170, 170)'
      },
      autosize: true,
      color: '#F5F5F5',
      plot_bgcolor: 'rgb(60, 60, 60)', paper_bgcolor: 'rgb(60, 60, 60)',
      legend: {
        font: {
          color: 'rgb(170, 170, 170'
        }
      },
      xaxis: {
        title: 'X-Axis',
        titlefont: {
          color: 'rgb(170, 170, 170)'
        },
        gridcolor: 'rgb(170, 170, 170)',
        zerolinecolor: 'rgb(170, 170, 170)',
        tickfont: {
          color: 'rgb(170, 170, 170)'
        },
        tickcolor: 'rgb(170, 170, 170)'
      },
      yaxis: {
        title: 'Y-Axis',
        titlefont: {
          color: 'rgb(170, 170, 170)'
        },
        gridcolor: 'rgb(170, 170, 170)',
        zerolinecolor: 'rgb(170, 170, 170)',
        tickfont: {
          color: 'rgb(170, 170, 170)'
        },
        tickcolor: 'rgb(170, 170, 170)'
      }
    }
  };


  constructor() { }

  ngOnInit() {

  }

}
