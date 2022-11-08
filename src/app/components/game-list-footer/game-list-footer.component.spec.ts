import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListFooterComponent } from './game-list-footer.component';

describe('GameListFooterComponent', () => {
  let component: GameListFooterComponent;
  let fixture: ComponentFixture<GameListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
