import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScapeComponent } from './scape.component';

describe('ScapeComponent', () => {
  let component: ScapeComponent;
  let fixture: ComponentFixture<ScapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
