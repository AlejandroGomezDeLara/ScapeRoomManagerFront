import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificationsSidebarComponent } from './especifications-sidebar.component';

describe('EspecificationsSidebarComponent', () => {
  let component: EspecificationsSidebarComponent;
  let fixture: ComponentFixture<EspecificationsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecificationsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecificationsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
