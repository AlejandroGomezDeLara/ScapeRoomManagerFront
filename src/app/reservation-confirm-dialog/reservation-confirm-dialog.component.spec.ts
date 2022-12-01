import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmDialogComponent } from './reservation-confirm-dialog.component';

describe('ReservationConfirmDialogComponent', () => {
  let component: ReservationConfirmDialogComponent;
  let fixture: ComponentFixture<ReservationConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
