import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  uploadFile(ws, file) {
    function readFile(event) {
      const ws_msg =  event.target.result;
      ws.send(ws_msg);
      ws.close();
      console.log('Closed connection to ws://localhost:1234');
    }

    file = file[0];
    const reader = new FileReader();
    reader.addEventListener('load', readFile);

    reader.onprogress = function(e) {
      console.log(Math.round((e.loaded / e.total) * 100) + '%' + ' of file read');
    };

    reader.onerror = function(e) {
      console.log(e);
    };

    reader.readAsText(file);
  }

  constructor() { }
}
