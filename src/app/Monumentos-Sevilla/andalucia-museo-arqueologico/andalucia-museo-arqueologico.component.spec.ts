import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaMuseoArqueologicoComponent } from './andalucia-museo-arqueologico.component';

describe('MuseoArqueologicoComponent', () => {
  let component: AndaluciaMuseoArqueologicoComponent;
  let fixture: ComponentFixture<AndaluciaMuseoArqueologicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaMuseoArqueologicoComponent]
    });
    fixture = TestBed.createComponent(AndaluciaMuseoArqueologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
