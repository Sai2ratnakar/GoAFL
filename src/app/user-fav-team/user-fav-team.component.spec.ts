import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavTeamComponent } from './user-fav-team.component';

describe('UserFavTeamComponent', () => {
  let component: UserFavTeamComponent;
  let fixture: ComponentFixture<UserFavTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
