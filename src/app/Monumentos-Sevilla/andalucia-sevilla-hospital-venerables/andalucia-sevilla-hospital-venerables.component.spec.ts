import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaHospitalVenerablesComponent } from './andalucia-sevilla-hospital-venerables.component';

describe('AndaluciaSevillaHospitalVenerablesComponent', () => {
  let component: AndaluciaSevillaHospitalVenerablesComponent;
  let fixture: ComponentFixture<AndaluciaSevillaHospitalVenerablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaHospitalVenerablesComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaHospitalVenerablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
