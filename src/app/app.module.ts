import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreedhEditComponent } from './components/threedh-edit/threedh-edit.component';
import { ThreedhPointComponent } from './components/threedh-point/threedh-point.component';

import { CoreDataService } from './services/core-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ThreedhEditComponent,
    ThreedhPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    CoreDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
