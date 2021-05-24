import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ThreeDHPoint } from '../../models/threedh-point.model';
import { CoreDataService } from '../../services/core-data.service';

@Component({
  selector: 'threedh-viewer',
  templateUrl: './threedh-viewer.component.html',
  styleUrls: ['./threedh-viewer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // Rejects external styling & scopes component styling to itself only
})
export class ThreeDHViewerComponent implements OnInit {
  @Input() brandId: number;
  points: ThreeDHPoint[] = [];

  constructor(private coreDataService: CoreDataService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.coreDataService.getPointsData()
      .subscribe(points => {
        if (points) {
          this.points = points;
        }
      })
    this.ref.detectChanges();
  }

  setActivePoint(rank: number) {
    if (this.points && this.points.length) {
      this.points.forEach(p => p.active = p.rank === rank);
    }
    this.ref.detectChanges();
  }
}
