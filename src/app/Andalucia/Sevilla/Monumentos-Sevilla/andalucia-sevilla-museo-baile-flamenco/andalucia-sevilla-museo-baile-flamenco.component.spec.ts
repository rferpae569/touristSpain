import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaMuseoBaileFlamencoComponent } from './andalucia-sevilla-museo-baile-flamenco.component';

describe('AndaluciaSevillaMuseoBaileFlamencoComponent', () => {
  let component: AndaluciaSevillaMuseoBaileFlamencoComponent;
  let fixture: ComponentFixture<AndaluciaSevillaMuseoBaileFlamencoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaMuseoBaileFlamencoComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaMuseoBaileFlamencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
