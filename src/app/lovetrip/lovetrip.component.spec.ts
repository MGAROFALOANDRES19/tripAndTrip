import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovetripComponent } from './lovetrip.component';

describe('LovetripComponent', () => {
  let component: LovetripComponent;
  let fixture: ComponentFixture<LovetripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovetripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
