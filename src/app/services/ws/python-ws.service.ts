import { Injectable } from '@angular/core';
import { Observer, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonWsService {

  connections: WebSocket[];
  subjects: Subject<MessageEvent>[];
  constructor() { }

  private create(url: string, name: string): Subject<MessageEvent> {
    const ws = new WebSocket(url);
    this.connections.push(ws);

    const observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      ws.onopen = () => ws.send(JSON.stringify({action: 'getAlgos'}));
      return ws.close.bind(ws);
    });
    const observer = {
      next: (data: Object) => {
      }
    };
    return Subject.create(observer, observable);
  }

}
