import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedhPointComponent } from './threedh-point.component';

describe('ThreedhPointComponent', () => {
  let component: ThreedhPointComponent;
  let fixture: ComponentFixture<ThreedhPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedhPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedhPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
