import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaHospitalCaridadComponent } from './andalucia-sevilla-hospital-caridad.component';

describe('AndaluciaSevillaHospitalCaridadComponent', () => {
  let component: AndaluciaSevillaHospitalCaridadComponent;
  let fixture: ComponentFixture<AndaluciaSevillaHospitalCaridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaHospitalCaridadComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaHospitalCaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
