import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaAyuntamientoSevillaComponent } from './andalucia-ayuntamiento-sevilla.component';

describe('AyuntamientoSevillaComponent', () => {
  let component: AndaluciaAyuntamientoSevillaComponent;
  let fixture: ComponentFixture<AndaluciaAyuntamientoSevillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaAyuntamientoSevillaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaAyuntamientoSevillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
