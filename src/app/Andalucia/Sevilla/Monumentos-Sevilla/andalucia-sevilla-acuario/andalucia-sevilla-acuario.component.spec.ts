import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaAcuarioComponent } from './andalucia-sevilla-acuario.component';

describe('AndaluciaSevillaAcuarioComponent', () => {
  let component: AndaluciaSevillaAcuarioComponent;
  let fixture: ComponentFixture<AndaluciaSevillaAcuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaAcuarioComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaAcuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
