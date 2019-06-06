import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFavTeamComponent } from './user-fav-team/user-fav-team.component';
import {DataServiceService} from './data.service';
import { NextFiveComponent } from './next-five/next-five.component';
import { MyTeamResultsComponent } from './my-team-results/my-team-results.component';
import { NextGamePredictionComponent } from './next-game-prediction/next-game-prediction.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
<<<<<<< HEAD
import { MyTeamRankComponent } from './my-team-rank/my-team-rank.component';
import { UpComingGamesComponent } from './up-coming-games/up-coming-games.component';
=======
>>>>>>> 1adc7ee20bde234044758a71176b7e82624d3ea9
// import { HeadToHeadComponent } from './head-to-head/head-to-head.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFavTeamComponent,
    NextFiveComponent,
    MyTeamResultsComponent,
    NextGamePredictionComponent,
    HeadToHeadComponent,
<<<<<<< HEAD
    MyTeamRankComponent,
    UpComingGamesComponent,
=======
>>>>>>> 1adc7ee20bde234044758a71176b7e82624d3ea9
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [UserFavTeamComponent]
})
export class AppModule { }
