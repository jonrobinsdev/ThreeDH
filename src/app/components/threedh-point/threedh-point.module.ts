import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDHPointComponent } from './threedh-point.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ThreeDHPointComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    ThreeDHPointComponent
  ],
  bootstrap: [ThreeDHPointComponent]
})
export class ThreeDHPointModule { }
