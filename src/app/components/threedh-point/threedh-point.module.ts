import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreedhPointComponent } from './threedh-point.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ThreedhPointComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    ThreedhPointComponent
  ],
  bootstrap: [ThreedhPointComponent]
})
export class ThreedhPointModule { }
