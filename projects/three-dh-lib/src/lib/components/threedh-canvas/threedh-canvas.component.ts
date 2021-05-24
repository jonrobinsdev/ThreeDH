import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ThreeDHPoint } from '../../models/threedh-point.model';

@Component({
  selector: 'app-threedh-canvas',
  templateUrl: './threedh-canvas.component.html',
  styleUrls: ['./threedh-canvas.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // Rejects external styling & scopes component styling to itself only
})
export class ThreeDHCanvasComponent implements OnInit {

  @Input() points: ThreeDHPoint[] = [];
  @Output() canvasClicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() pointClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {}
}
