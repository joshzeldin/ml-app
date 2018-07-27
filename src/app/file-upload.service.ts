import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  uploadFile(ws, file) {
    function readFile(event) {
      var ws_msg =  event.target.result;
      ws.send(ws_msg);
      ws.close();
      console.log("Closed connection to ws://localhost:1234")
    }
    file = file[0];
    var reader = new FileReader();
    reader.addEventListener('load', readFile);
    reader.readAsText(file);

  }

  constructor(private http: HttpClient) { }
}
