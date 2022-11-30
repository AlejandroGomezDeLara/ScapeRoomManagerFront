import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRecomendationsComponent } from './game-recomendations.component';

describe('GameRecomendationsComponent', () => {
  let component: GameRecomendationsComponent;
  let fixture: ComponentFixture<GameRecomendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRecomendationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
