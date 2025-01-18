import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosServicioComponent } from './terminos-servicio.component';

describe('TerminosServicioComponent', () => {
  let component: TerminosServicioComponent;
  let fixture: ComponentFixture<TerminosServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminosServicioComponent]
    });
    fixture = TestBed.createComponent(TerminosServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
