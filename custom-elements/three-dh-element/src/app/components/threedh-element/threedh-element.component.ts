import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThreeDHPoint } from 'src/app/models/threedh-point.model';

@Component({
  selector: 'app-threedh-element',
  templateUrl: './threedh-element.component.html',
  styleUrls: ['./threedh-element.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // Rejects external styling & scopes component styling to itself only
})
export class ThreedhElementComponent implements OnInit {

  points: ThreeDHPoint[] = [];

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Change Detection because we disabled zone.js
    this.ref.detectChanges();
  }

  addOnClick(event: MouseEvent) {
    if (event && event instanceof MouseEvent) {
      this.points.push(new ThreeDHPoint(event.offsetX, event.offsetY));
    }
    this.ref.detectChanges();
  }
}
