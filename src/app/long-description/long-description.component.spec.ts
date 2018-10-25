import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LongDescriptionComponent } from './long-description.component';

describe('LongDescriptionComponent', () => {
  let component: LongDescriptionComponent;
  let fixture: ComponentFixture<LongDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
