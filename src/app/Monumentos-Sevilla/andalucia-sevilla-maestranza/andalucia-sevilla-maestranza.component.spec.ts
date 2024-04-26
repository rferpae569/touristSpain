import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaMaestranzaComponent } from './andalucia-sevilla-maestranza.component';

describe('AndaluciaSevillaMaestranzaComponent', () => {
  let component: AndaluciaSevillaMaestranzaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaMaestranzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaMaestranzaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaMaestranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
