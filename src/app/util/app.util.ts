import {Injectable} from '@angular/core';
import {API_HOST} from './app.constant';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class AppUtil {

  constructor(private snackBar: MatSnackBar) {
  }

  getApiURL(uri: string): string {
    return API_HOST + uri;
  }

  alert(error): void {
    this.snackBar.open(error, '', {
      duration: 5000
    });
  }
}
