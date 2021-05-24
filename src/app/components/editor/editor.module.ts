import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ThreeDHCanvasModule } from 'three-dh-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PointsListModule } from '../points-list/points-list.module';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ThreeDHCanvasModule,
    PointsListModule
  ],
  exports: [
    EditorComponent
  ],
})
export class EditorModule { }
