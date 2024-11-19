import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaMuseoBellasArtesComponent } from './andalucia-sevilla-museo-bellas-artes.component';

describe('AndaluciaSevillaMuseoBellasArtesComponent', () => {
  let component: AndaluciaSevillaMuseoBellasArtesComponent;
  let fixture: ComponentFixture<AndaluciaSevillaMuseoBellasArtesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaMuseoBellasArtesComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaMuseoBellasArtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
