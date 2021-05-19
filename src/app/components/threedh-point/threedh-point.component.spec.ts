import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDHPointComponent } from './threedh-point.component';

describe('ThreeDHPointComponent', () => {
  let component: ThreeDHPointComponent;
  let fixture: ComponentFixture<ThreeDHPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDHPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDHPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
