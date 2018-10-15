import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldtripComponent } from './goldtrip.component';

describe('GoldtripComponent', () => {
  let component: GoldtripComponent;
  let fixture: ComponentFixture<GoldtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
