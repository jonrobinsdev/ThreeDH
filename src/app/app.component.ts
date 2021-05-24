import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThreeDH';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Do initial data import here?
    this.router.navigate(['home'], { relativeTo: this.route });
  }
}
