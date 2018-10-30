import { Injectable } from '@angular/core';
import { Connection } from './connection';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  connections: Connection[] = [];

  constructor() { }

   find(name: string) {
    return this.connections.find(function(connection) {
      return connection.name === name;
    });
  }

   remove(name: string) {
    this.connections = this.connections.filter(function(connection) {
      return !(connection.name === name);
    });
  }

  open(name, url) {
    let connection = this.find(name);
    if (!connection) {
      const ws = new WebSocket(url);
      connection = {name: name, ws: ws};
      this.connections.push(connection);
      ws.onopen = () => console.log('Established connection: ' + url);
      ws.onclose = () => console.log('Closed connection: ' + url);
    }
    return connection;
  }

  send(name, msg) {
    const connection = this.find(name);
    connection.ws.send(msg);
  }

  close(name) {
    const connection = this.find(name);
    connection.ws.close();
    this.remove(name);
  }

}
