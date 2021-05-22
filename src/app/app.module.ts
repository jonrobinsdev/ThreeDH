import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThreeDHCanvasModule } from 'three-dh-lib';
import { EditCoreDataService } from './services/edit-core-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ThreeDHCanvasModule
  ],
  providers: [
    EditCoreDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
