import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeItemComponent } from './scape-item.component';

describe('ScapeItemComponent', () => {
  let component: ScapeItemComponent;
  let fixture: ComponentFixture<ScapeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
