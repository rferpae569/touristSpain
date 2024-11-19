import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaPabellonNavegacionComponent } from './andalucia-sevilla-pabellon-navegacion.component';

describe('AndaluciaSevillaPabellonNavegacionComponent', () => {
  let component: AndaluciaSevillaPabellonNavegacionComponent;
  let fixture: ComponentFixture<AndaluciaSevillaPabellonNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaPabellonNavegacionComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaPabellonNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
