import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyuntamientoSevillaComponent } from './ayuntamiento-sevilla.component';

describe('AyuntamientoSevillaComponent', () => {
  let component: AyuntamientoSevillaComponent;
  let fixture: ComponentFixture<AyuntamientoSevillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyuntamientoSevillaComponent]
    });
    fixture = TestBed.createComponent(AyuntamientoSevillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
