import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaMuseoArtesCostumbresComponent } from './andalucia-museo-artes-costumbres.component';

describe('MuseoArtesCostumbresComponent', () => {
  let component: AndaluciaMuseoArtesCostumbresComponent;
  let fixture: ComponentFixture<AndaluciaMuseoArtesCostumbresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaMuseoArtesCostumbresComponent]
    });
    fixture = TestBed.createComponent(AndaluciaMuseoArtesCostumbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
