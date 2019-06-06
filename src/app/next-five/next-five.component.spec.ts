import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFiveComponent } from './next-five.component';

describe('NextFiveComponent', () => {
  let component: NextFiveComponent;
  let fixture: ComponentFixture<NextFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
