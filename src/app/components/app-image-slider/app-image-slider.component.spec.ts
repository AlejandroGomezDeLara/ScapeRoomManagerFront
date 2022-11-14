import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImageSliderComponent } from './app-image-slider.component';

describe('AppImageSliderComponent', () => {
  let component: AppImageSliderComponent;
  let fixture: ComponentFixture<AppImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppImageSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
