import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, 
  MatFormFieldModule, MatMenuModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';
import { AppComponent } from './app.component';
import { AlgosComponent } from './algos/algos.component';
import { AlgoDetailComponent } from './algo-detail/algo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HamburgerComponent } from './navbar/hamburger/hamburger.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgosComponent,
    AlgoDetailComponent,
    MessagesComponent,
    FileUploadComponent,
    HamburgerComponent,
    GridTestComponent,
    DashboardComponent,
    GraphComponent
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
    MatInputModule,
    BrowserAnimationsModule,
    GridsterModule,
    AppRoutingModule,
    PlotlyModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
