import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseoArqueologicoComponent } from './museo-arqueologico.component';

describe('MuseoArqueologicoComponent', () => {
  let component: MuseoArqueologicoComponent;
  let fixture: ComponentFixture<MuseoArqueologicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuseoArqueologicoComponent]
    });
    fixture = TestBed.createComponent(MuseoArqueologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
