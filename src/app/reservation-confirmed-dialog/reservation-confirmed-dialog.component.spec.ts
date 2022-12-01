import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmedDialogComponent } from './reservation-confirmed-dialog.component';

describe('ReservationConfirmedDialogComponent', () => {
  let component: ReservationConfirmedDialogComponent;
  let fixture: ComponentFixture<ReservationConfirmedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationConfirmedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationConfirmedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
