import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './components/home/home.module';
import { PointsListModule } from './components/points-list/points-list.module';
import { AppDataService } from './services/app-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PointsListModule
  ],
  providers: [
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
