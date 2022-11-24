import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenReservationSmallComponent } from './open-reservation-small.component';

describe('OpenReservationSmallComponent', () => {
  let component: OpenReservationSmallComponent;
  let fixture: ComponentFixture<OpenReservationSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenReservationSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenReservationSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
