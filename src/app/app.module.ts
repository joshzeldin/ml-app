import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AlgosComponent } from './algos/algos.component';
import { AlgoDetailComponent } from './algo-detail/algo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HamburgerComponent } from './navbar/hamburger/hamburger.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgosComponent,
    AlgoDetailComponent,
    MessagesComponent,
    FileUploadComponent,
    HamburgerComponent,
    GridTestComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    GridsterModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
