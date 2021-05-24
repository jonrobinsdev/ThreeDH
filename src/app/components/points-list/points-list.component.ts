import { Component, Input, OnInit } from '@angular/core';
import { ThreeDHPoint } from 'three-dh-lib';

@Component({
  selector: 'app-points-list',
  templateUrl: './points-list.component.html',
  styleUrls: ['./points-list.component.scss']
})
export class PointsListComponent implements OnInit {
  @Input() points: ThreeDHPoint[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
