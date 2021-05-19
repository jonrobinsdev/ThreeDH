import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ThreeDHPoint } from 'src/app/models/threedh-point.model';

@Component({
  selector: 'app-threedh-point',
  templateUrl: './threedh-point.component.html',
  styleUrls: ['./threedh-point.component.scss']
})
export class ThreeDHPointComponent implements OnInit {

  @Input() model: ThreeDHPoint;
  @Input() editMode: boolean = false;
  
  @Output() click: EventEmitter<number> = new EventEmitter();

  public expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onPointClick(rank: number) {
    this.click.emit(rank);
  }
}
