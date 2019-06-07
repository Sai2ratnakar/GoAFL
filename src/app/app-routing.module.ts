import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserFavTeamComponent } from './user-fav-team/user-fav-team.component';
import { NextFiveComponent } from './next-five/next-five.component';
import { MyTeamResultsComponent } from './my-team-results/my-team-results.component';
import { NextGamePredictionComponent } from './next-game-prediction/next-game-prediction.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { MyTeamRankComponent } from './my-team-rank/my-team-rank.component';
import { UpComingGamesComponent } from './up-coming-games/up-coming-games.component';


const appRoutes:Routes=[
 {path:'/', component:MyTeamRankComponent},
  {path:'/upcoming', component:UpComingGamesComponent},
  {path:'/next-game-prdeiction', component:NextGamePredictionComponent},
  
  {path:'/next-five', component:NextFiveComponent},
  
  {path:'/head-to-head', component:HeadToHeadComponent},
  {path:'/my-team-rank', component:MyTeamRankComponent},
  {path:'/my-team-results', component:MyTeamResultsComponent}
  // { path: '**', component: UserFavTeamComponent }
  
]

@NgModule({
imports:[
      RouterModule.forRoot(appRoutes)
],

exports:[RouterModule]
})
export class AppRoutingModule{

}