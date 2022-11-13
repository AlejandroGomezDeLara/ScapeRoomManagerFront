import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPaginationComponent } from './game-list-pagination.component';

describe('GameListPaginationComponent', () => {
  let component: GameListPaginationComponent;
  let fixture: ComponentFixture<GameListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
