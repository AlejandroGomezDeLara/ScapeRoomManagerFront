import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReviewItemComponent } from './game-review-item.component';

describe('GameReviewItemComponent', () => {
  let component: GameReviewItemComponent;
  let fixture: ComponentFixture<GameReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameReviewItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
