import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Algo } from '../algo';
import { AlgoService } from '../algo.service';
import { Observer, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-algos',
  templateUrl: './algos.component.html',
  styleUrls: ['./algos.component.css']
})
export class AlgosComponent implements OnInit {

  ML_SERVER_URL: String = 'ws://localhost:6789';
  algos: Algo[];
  selectedAlgo: String;
  wsSubject: Subject<MessageEvent>;
  algonames: String[];
  ws: WebSocket;
  @Output() algoSet = new EventEmitter<Algo>();

  constructor(
    private algoService: AlgoService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('Init Algos');
    this.wsSubject = this.create(this.ML_SERVER_URL);
    this.wsSubject.subscribe(msg => this.onMLServerMsg(msg));
  }

  onAlgoParams = function(parsed_msg) {
    const algo = new Algo;
    algo.name = parsed_msg.name;
    algo.params = [];
    for (let i = 0; i < parsed_msg.args.length; i++) {
      algo.params.push({
        'name': parsed_msg.args.reverse()[i],
        'value': parsed_msg.defaults.reverse()[i]
    });
    }
    algo.params = algo.params.reverse();
    return algo;
  };

  onMLServerMsg = (msg) => {
    const parsed_msg = JSON.parse(msg.data);
    if (parsed_msg.type === 'algos') {
      console.log(parsed_msg.value);
      this.algonames = parsed_msg.value;
      console.log('Algos should be displayed');
    } else if (parsed_msg.type === 'algoParams') {
      this.selectedAlgo = parsed_msg.name;
      const algo = this.onAlgoParams(parsed_msg);
      this.algoSet.emit(algo);
    }
    this.ref.markForCheck();
  }

  getAlgos() {
    this.ws.send(JSON.stringify({action: 'getAlgos'}));
    this.ws.onmessage = function (event) {
      const data = JSON.parse(event.data);
    };
  }

  onSetAlgo(algo) {
    console.log(algo);
    this.selectedAlgo = algo;
    this.ws.send(JSON.stringify({action: 'getAlgoParams', value: algo}));
  }

  private create(url): Subject<MessageEvent> {
    this.ws = new WebSocket(url);

    const observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
      this.ws.onmessage = obs.next.bind(obs);
      this.ws.onerror = obs.error.bind(obs);
      this.ws.onclose = obs.complete.bind(obs);
      this.ws.onopen = () => this.ws.send(JSON.stringify({action: 'getAlgos'}));
      return this.ws.close.bind(this.ws);
    });
    const observer = {
      next: (data: Object) => {
      }
    };
    return Subject.create(observer, observable);
  }
}
