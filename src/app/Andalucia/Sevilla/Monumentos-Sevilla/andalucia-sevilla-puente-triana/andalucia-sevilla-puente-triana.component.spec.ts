import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaPuenteTrianaComponent } from './andalucia-sevilla-puente-triana.component';

describe('AndaluciaSevillaPuenteTrianaComponent', () => {
  let component: AndaluciaSevillaPuenteTrianaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaPuenteTrianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaPuenteTrianaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaPuenteTrianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
