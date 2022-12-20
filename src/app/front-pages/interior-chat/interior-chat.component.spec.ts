import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorChatComponent } from './interior-chat.component';

describe('InteriorChatComponent', () => {
  let component: InteriorChatComponent;
  let fixture: ComponentFixture<InteriorChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
