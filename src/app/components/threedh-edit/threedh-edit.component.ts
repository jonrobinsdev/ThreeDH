import { Component, OnInit } from '@angular/core';
import { ThreeDHPoint } from '../../models/threedh-point.model';

@Component({
  selector: 'app-threedh-edit',
  templateUrl: './threedh-edit.component.html',
  styleUrls: ['./threedh-edit.component.scss']
})
export class ThreedhEditComponent implements OnInit {

  points: ThreeDHPoint[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addOnClick(event: MouseEvent) {
    if (event && event instanceof MouseEvent) {
      this.points.push(new ThreeDHPoint(event.offsetX, event.offsetY));
    }
    console.log(event);
  }
}
