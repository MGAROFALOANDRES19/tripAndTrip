import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDestinosComponent } from './menu-destinos.component';

describe('MenuDestinosComponent', () => {
  let component: MenuDestinosComponent;
  let fixture: ComponentFixture<MenuDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
