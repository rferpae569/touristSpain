import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaCatedralGiraldaComponent } from './andalucia-sevilla-catedral-giralda.component';

describe('AndaluciaSevillaCatedralGiraldaComponent', () => {
  let component: AndaluciaSevillaCatedralGiraldaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaCatedralGiraldaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaCatedralGiraldaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaCatedralGiraldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
