import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListHeaderComponent } from './game-list-header.component';

describe('GameListHeaderComponent', () => {
  let component: GameListHeaderComponent;
  let fixture: ComponentFixture<GameListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
