import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FileDownloadComponent} from './filedownload/file-download.component';
import {FileUploadComponent} from './fileupload/file-upload.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DropAndDragDirective} from './fileupload/drop-and-drag.directive';
import {Server} from './util/server';
import {AppUtil} from './util/app.util';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FileDownloadComponent,
    FileUploadComponent,
    DropAndDragDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [Server, AppUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
