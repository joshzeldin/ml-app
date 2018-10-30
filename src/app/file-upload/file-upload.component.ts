import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { KdbWsService } from '../services/ws/kdb-ws.service';
import { ToKdbMessage } from '../services/ws/kdbmessage';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files;
    console.log(this.selectedFile);
  }

  onUpload() {
    const ws = this.kdbWsService.open('ws://localhost:1234').ws;
    if (ws.readyState) {
      this.uploadFile(this.selectedFile);
    }
    ws.onmessage = (e) => {
      console.log(this.kdbWsService.deserialize(e.data));
    };
  }
  readFile = (event) => {
    console.log(event);
    const kdbmessage = new ToKdbMessage();
    kdbmessage.function = '.mlapp.dataManager.addData';
    kdbmessage.parameters = [this.selectedFile[0].name, event.target.result];
    kdbmessage.subject = 'file_upload';
    this.kdbWsService.send(kdbmessage);
    this.selectedFile = null;
    this.ref.markForCheck();
  }

  uploadFile(file) {

    file = file[0];
    const reader = new FileReader();
    reader.addEventListener('load', this.readFile);

    reader.onprogress = function(e) {
      console.log(Math.round((e.loaded / e.total) * 100) + '%' + ' of file read');
    };

    reader.onerror = function(e) {
      console.log(e);
    };

    reader.readAsText(file);
  }

  constructor(
    private ref: ChangeDetectorRef,
    private kdbWsService: KdbWsService,
    ) { }

  ngOnInit() {
    this.kdbWsService.open('ws://localhost:1234');
  }

}
