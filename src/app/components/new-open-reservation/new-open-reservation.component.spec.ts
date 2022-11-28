import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOpenReservationComponent } from './new-open-reservation.component';

describe('NewOpenReservationComponent', () => {
  let component: NewOpenReservationComponent;
  let fixture: ComponentFixture<NewOpenReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOpenReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOpenReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
