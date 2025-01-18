import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevillaMenuComponent } from './sevilla-menu.component';

describe('SevillaMenuComponent', () => {
  let component: SevillaMenuComponent;
  let fixture: ComponentFixture<SevillaMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SevillaMenuComponent]
    });
    fixture = TestBed.createComponent(SevillaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
