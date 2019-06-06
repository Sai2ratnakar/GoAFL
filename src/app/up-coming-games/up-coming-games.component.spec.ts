import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingGamesComponent } from './up-coming-games.component';

describe('UpComingGamesComponent', () => {
  let component: UpComingGamesComponent;
  let fixture: ComponentFixture<UpComingGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
