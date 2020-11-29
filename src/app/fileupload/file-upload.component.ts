import {Component} from '@angular/core';
import {API, MESSAGES, FILE_TYPES, POST} from '../util/app.constant';
import {Server} from '../util/server';
import {AppUtil} from '../util/app.util';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  fileTypes = FILE_TYPES;
  file = {type: '', data: null, name: ''};

  constructor(private server: Server, private util: AppUtil) {
  }

  upload(files): void {
    if (!this.file.type) {
      this.util.alert(MESSAGES.fileType);
      return;
    }
    const selectedFile = files[0];
    this.file.data = selectedFile;
    this.file.name = selectedFile.name;
  }

  browse(fileUploader: HTMLInputElement): void {
    if (this.file.type) {
      fileUploader.click();
    } else {
      this.util.alert(MESSAGES.fileType);
    }
  }

  cancel(): void {
    this.file = {type: this.file.type, data: '', name: ''};
  }

  submit(): void {
    if (!this.file.name || !this.file.data || !this.file.type) {
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.file.data, this.file.name);

    const request = {
      data: formData,
      url: this.util.getApiURL(API.save) + `?type=${this.file.type}`,
      type: POST
    };
    this.server.submitRequest(request).subscribe(data => {
        this.util.alert(MESSAGES.success);
        this.file = {type: '', data: null, name: ''};
      },
      error => {
        this.util.alert(MESSAGES.save);
      });
  }

  downloadTemplate(name: string, label: string): void {
    window.open(this.util.getApiURL(API.template) + `?name=${name}`, '_blank');
  }
}
