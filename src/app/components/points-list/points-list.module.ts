import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsListComponent } from './points-list.component';

@NgModule({
  declarations: [
    PointsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PointsListComponent
  ],
})
export class PointsListModule { }
