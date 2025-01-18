import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaLaSetaComponent } from './andalucia-sevilla-la-seta.component';

describe('AndaluciaSevillaLaSetaComponent', () => {
  let component: AndaluciaSevillaLaSetaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaLaSetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaLaSetaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaLaSetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
