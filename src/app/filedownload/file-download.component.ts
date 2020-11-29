import { Component } from '@angular/core';
import {API, FILE_TYPES} from '../util/app.constant';
import {Server} from '../util/server';
import {AppUtil} from '../util/app.util';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent {
  fileTypes = FILE_TYPES;

  constructor(private server: Server, private util: AppUtil) {
  }

  downloadTemplate(type: string): void {
    window.open(this.util.getApiURL(API.get) + `?type=${type}`, '_blank');
  }

}
