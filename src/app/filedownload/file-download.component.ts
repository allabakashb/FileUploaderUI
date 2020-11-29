import { Component } from '@angular/core';
import {API, FILE_TYPES, MESSAGES} from '../util/app.constant';
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

  downloadTemplate(name: string): void {
    const request = {
      params: { name,  fileType: 'existing' },
      url: this.util.getApiURL(API.check),
    };
    this.server.submitRequest(request).subscribe(payload => {
          if (payload && payload.found) {
            window.open(this.util.getApiURL(API.get) + `?type=${name}`, '_blank');
          } else {
            this.util.alert(MESSAGES.fileNotFound);
          }
        },
        error => {
          this.util.alert(MESSAGES.template);
        });
  }

}
