import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedhElementComponent } from './threedh-element.component';

describe('ThreedhElementComponent', () => {
  let component: ThreedhElementComponent;
  let fixture: ComponentFixture<ThreedhElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedhElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedhElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
