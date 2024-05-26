import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaCasaSalinasComponent } from './andalucia-sevilla-casa-salinas.component';

describe('AndaluciaSevillaCasaSalinasComponent', () => {
  let component: AndaluciaSevillaCasaSalinasComponent;
  let fixture: ComponentFixture<AndaluciaSevillaCasaSalinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaCasaSalinasComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaCasaSalinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
