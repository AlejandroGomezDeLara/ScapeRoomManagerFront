import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenReservationComponent } from './open-reservation.component';

describe('OpenReservationComponent', () => {
  let component: OpenReservationComponent;
  let fixture: ComponentFixture<OpenReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
