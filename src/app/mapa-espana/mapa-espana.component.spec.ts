import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaEspanaComponent } from './mapa-espana.component';

describe('MapaEspanaComponent', () => {
  let component: MapaEspanaComponent;
  let fixture: ComponentFixture<MapaEspanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaEspanaComponent]
    });
    fixture = TestBed.createComponent(MapaEspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
