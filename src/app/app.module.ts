import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreDataService } from './services/core-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThreedhEditModule } from './components/threedh-edit/threedh-edit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ThreedhEditModule
  ],
  providers: [
    CoreDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
