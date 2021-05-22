import { NgModule } from '@angular/core';
import { ThreeDHCanvasModule } from './components/threedh-canvas/threedh-canvas.module';
import { CoreDataService } from './services/core-data.service';

@NgModule({
  declarations: [
  ],
  imports: [
    ThreeDHCanvasModule,
  ],
  providers: [
    //CoreDataService
  ]
})
export class ThreeDHLibModule { }
