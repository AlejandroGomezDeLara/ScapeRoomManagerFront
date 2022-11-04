import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeListFiltersComponent } from './scape-list-filters.component';

describe('ScapeListFiltersComponent', () => {
  let component: ScapeListFiltersComponent;
  let fixture: ComponentFixture<ScapeListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
