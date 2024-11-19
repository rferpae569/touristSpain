import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaPalacioMarquesesAlgabaComponent } from './andalucia-sevilla-palacio-marqueses-algaba.component';

describe('AndaluciaSevillaPalacioMarquesesAlgabaComponent', () => {
  let component: AndaluciaSevillaPalacioMarquesesAlgabaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaPalacioMarquesesAlgabaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaPalacioMarquesesAlgabaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaPalacioMarquesesAlgabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
