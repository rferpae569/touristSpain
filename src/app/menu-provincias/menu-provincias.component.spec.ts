import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProvinciasComponent } from './menu-provincias.component';

describe('MenuProvinciasComponent', () => {
  let component: MenuProvinciasComponent;
  let fixture: ComponentFixture<MenuProvinciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProvinciasComponent]
    });
    fixture = TestBed.createComponent(MenuProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
