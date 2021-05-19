import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDHCanvasComponent } from './threedh-canvas.component';

describe('ThreeDHCanvasComponent', () => {
  let component: ThreeDHCanvasComponent;
  let fixture: ComponentFixture<ThreeDHCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDHCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDHCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
