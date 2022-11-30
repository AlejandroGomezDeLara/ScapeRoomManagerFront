import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRecomendationItemComponent } from './game-recomendation-item.component';

describe('GameRecomendationItemComponent', () => {
  let component: GameRecomendationItemComponent;
  let fixture: ComponentFixture<GameRecomendationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRecomendationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameRecomendationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
