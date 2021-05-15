import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedhEditComponent } from './threedh-edit.component';

describe('ThreedhEditComponent', () => {
  let component: ThreedhEditComponent;
  let fixture: ComponentFixture<ThreedhEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedhEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedhEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
