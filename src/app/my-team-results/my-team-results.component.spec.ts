import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamResultsComponent } from './my-team-results.component';

describe('MyTeamResultsComponent', () => {
  let component: MyTeamResultsComponent;
  let fixture: ComponentFixture<MyTeamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
