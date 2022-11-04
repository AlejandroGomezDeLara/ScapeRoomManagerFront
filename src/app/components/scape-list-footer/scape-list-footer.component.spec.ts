import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeListFooterComponent } from './scape-list-footer.component';

describe('ScapeListFooterComponent', () => {
  let component: ScapeListFooterComponent;
  let fixture: ComponentFixture<ScapeListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeListFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
