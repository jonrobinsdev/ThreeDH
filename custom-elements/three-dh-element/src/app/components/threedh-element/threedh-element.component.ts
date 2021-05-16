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
  }

  addOnClick(event: MouseEvent) {
    if (event && event instanceof MouseEvent && event.type === 'click' && this.points) {
      const targetEl = ((event.target || event.currentTarget) as Element);
      const targetId = targetEl.id;

      // Check we clicked the image canvas, reset points, and add new one.
      if (targetId === "editImage") {
        this.resetAllPoints();
        this.createNewPoint(event);
      }
    }
    this.ref.detectChanges();
  }

  createNewPoint(event: MouseEvent) {
    if (event) {
      const pointX = event.offsetX - (event.offsetX * 0.05); //quick maffs
      const pointY = event.offsetY - (event.offsetY * 0.05);

      const newPoint = new ThreeDHPoint(pointX, pointY);
      newPoint.rank = (this.points.length + 1);
      newPoint.active = true;
      newPoint.text = "This is some test Text. Will this new line work? \n probably not"

      this.points.push(newPoint);
    }
  }

  resetAllPoints() {
    if (this.points && this.points.length) {
      this.points.forEach(p => p.active = false);
    }
    this.ref.detectChanges();
  }

  setActivePoint(rank: number) {
    if (this.points && this.points.length) {
      this.points.forEach(p => p.active = p.rank === rank);
    }
    this.ref.detectChanges();
  }

  clearAllPoints() {
    this.points = [];
    this.ref.detectChanges();
  }
}
