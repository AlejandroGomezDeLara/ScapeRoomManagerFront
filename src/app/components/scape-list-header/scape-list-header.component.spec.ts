import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeListHeaderComponent } from './scape-list-header.component';

describe('ScapeListHeaderComponent', () => {
  let component: ScapeListHeaderComponent;
  let fixture: ComponentFixture<ScapeListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
