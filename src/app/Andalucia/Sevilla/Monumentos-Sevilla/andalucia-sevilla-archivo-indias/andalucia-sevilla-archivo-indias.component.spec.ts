import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaArchivoIndiasComponent } from './andalucia-sevilla-archivo-indias.component';

describe('AndaluciaSevillaArchivoIndiasComponent', () => {
  let component: AndaluciaSevillaArchivoIndiasComponent;
  let fixture: ComponentFixture<AndaluciaSevillaArchivoIndiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaArchivoIndiasComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaArchivoIndiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
