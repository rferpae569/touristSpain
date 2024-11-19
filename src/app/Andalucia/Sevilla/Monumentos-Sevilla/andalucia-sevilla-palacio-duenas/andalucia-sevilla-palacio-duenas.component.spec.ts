import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaPalacioDuenasComponent } from './andalucia-sevilla-palacio-duenas.component';

describe('AndaluciaSevillaPalacioDuenasComponent', () => {
  let component: AndaluciaSevillaPalacioDuenasComponent;
  let fixture: ComponentFixture<AndaluciaSevillaPalacioDuenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaPalacioDuenasComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaPalacioDuenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
