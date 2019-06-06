import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamRankComponent } from './my-team-rank.component';

describe('MyTeamRankComponent', () => {
  let component: MyTeamRankComponent;
  let fixture: ComponentFixture<MyTeamRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
