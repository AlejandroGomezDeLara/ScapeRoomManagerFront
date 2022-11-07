import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSearchbarComponent } from './autocomplete-searchbar.component';

describe('AutocompleteSearchbarComponent', () => {
  let component: AutocompleteSearchbarComponent;
  let fixture: ComponentFixture<AutocompleteSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
