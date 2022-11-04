import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeListComponent } from './scape-list.component';

describe('ScapeListComponent', () => {
  let component: ScapeListComponent;
  let fixture: ComponentFixture<ScapeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
