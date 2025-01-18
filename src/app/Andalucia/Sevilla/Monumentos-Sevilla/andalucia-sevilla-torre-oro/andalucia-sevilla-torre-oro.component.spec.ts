import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaTorreOroComponent } from './andalucia-sevilla-torre-oro.component';

describe('AndaluciaSevillaTorreOroComponent', () => {
  let component: AndaluciaSevillaTorreOroComponent;
  let fixture: ComponentFixture<AndaluciaSevillaTorreOroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaTorreOroComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaTorreOroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
