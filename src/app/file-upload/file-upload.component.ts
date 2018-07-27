import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files;
  }

  onUpload(){
    var ws = new WebSocket("ws://localhost:1234");
    ws.onmessage = function(e){ console.log(e.data); };
    ws.onopen = () => console.log("Opened connection to ws://localhost:1234");
    this.fileUploadService.uploadFile(ws, this.selectedFile)
  }

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

}
