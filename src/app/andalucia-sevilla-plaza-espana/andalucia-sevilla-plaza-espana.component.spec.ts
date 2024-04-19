import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaPlazaEspanaComponent } from './andalucia-sevilla-plaza-espana.component';

describe('AndaluciaSevillaPlazaEspanaComponent', () => {
  let component: AndaluciaSevillaPlazaEspanaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaPlazaEspanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaPlazaEspanaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaPlazaEspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
