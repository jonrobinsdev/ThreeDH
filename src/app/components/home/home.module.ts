import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThreeDHCanvasModule } from 'three-dh-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PointsListModule } from '../points-list/points-list.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ThreeDHCanvasModule,
    PointsListModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
