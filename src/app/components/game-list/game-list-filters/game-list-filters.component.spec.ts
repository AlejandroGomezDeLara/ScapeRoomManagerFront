import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListFiltersComponent } from './game-list-filters.component';

describe('GameListFiltersComponent', () => {
  let component: GameListFiltersComponent;
  let fixture: ComponentFixture<GameListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
