import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDescGoldComponent } from './long-desc-gold.component';

describe('LongDescGoldComponent', () => {
  let component: LongDescGoldComponent;
  let fixture: ComponentFixture<LongDescGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongDescGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongDescGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
