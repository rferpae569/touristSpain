import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaluciaSevillaComponent } from './andalucia-sevilla.component';

describe('AndaluciaSevillaComponent', () => {
  let component: AndaluciaSevillaComponent;
  let fixture: ComponentFixture<AndaluciaSevillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndaluciaSevillaComponent]
    });
    fixture = TestBed.createComponent(AndaluciaSevillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
