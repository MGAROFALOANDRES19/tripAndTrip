import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionComponent } from './slideshow.component';

describe('PromocionComponent', () => {
  let component: PromocionComponent;
  let fixture: ComponentFixture<PromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
