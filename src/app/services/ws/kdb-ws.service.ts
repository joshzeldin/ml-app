import { Injectable } from '@angular/core';
import { Observer, Observable, Subject } from 'rxjs';
import { WsService } from './ws.service';
import { ToKdbMessage, FromKdbMessage } from './kdbmessage';
import * as kdb from '../../jsutils/kdb.js';

@Injectable({
  providedIn: 'root'
})
export class KdbWsService {

  ws: WebSocket;

  constructor(
    private wsService: WsService,
  ) { }

  open(url) {
    const connection = this.wsService.open('kdb', url);
    this.ws = connection.ws;
    this.ws.binaryType = 'arraybuffer';
    return connection;
  }

  serialize(data: ToKdbMessage): ArrayBuffer {
    return kdb.serialize(data);
  }

  deserialize(data: ArrayBuffer): FromKdbMessage {
    return kdb.deserialize(data);
  }

  send = (data: ToKdbMessage) => this.ws.send(this.serialize(data));

}
