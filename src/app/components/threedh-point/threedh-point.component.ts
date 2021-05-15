import { Component, Input, OnInit } from '@angular/core';
import { ThreeDHPoint } from 'src/app/models/threedh-point.model';

@Component({
  selector: 'app-threedh-point',
  templateUrl: './threedh-point.component.html',
  styleUrls: ['./threedh-point.component.scss']
})
export class ThreedhPointComponent implements OnInit {

  @Input() model: ThreeDHPoint;

  constructor() { }

  ngOnInit(): void {
  }

}
