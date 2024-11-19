import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaRealAlcazarComponent } from './andalucia-sevilla-real-alcazar.component';

describe('AndaluciaSevillaRealAlcazarComponent', () => {
  let component: AndaluciaSevillaRealAlcazarComponent;
  let fixture: ComponentFixture<AndaluciaSevillaRealAlcazarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaRealAlcazarComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaRealAlcazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
