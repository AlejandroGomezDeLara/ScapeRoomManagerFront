import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeListPaginationComponent } from './scape-list-pagination.component';

describe('ScapeListPaginationComponent', () => {
  let component: ScapeListPaginationComponent;
  let fixture: ComponentFixture<ScapeListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeListPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
