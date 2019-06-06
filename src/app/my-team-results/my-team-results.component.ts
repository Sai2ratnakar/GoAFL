import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import {DataServiceService} from '../data.service'

@Component({
  selector: 'app-my-team-results',
  templateUrl: './my-team-results.component.html',
  styleUrls: ['./my-team-results.component.css']
})
export class MyTeamResultsComponent implements OnInit {
  myTeam: Team;
  
  games:Game[];
  allResults: Game[];
  nextRound: number=0;
  constructor(private data: DataServiceService) {
    this.myTeam = this.data.getSelectedTeam();
   }

  ngOnInit() {
  
    this.getTeams();
  // if(this.selected){
  //   this.getTeams(this.team);
  //   console.log("Chekced" + this.team);
  // }
  
  }

  getTeams() {
    this.data.getGames().subscribe(games => 
      { this.games = games;
      // console.log("Games" + this.games.length);

      for(let game of this.games) {
        // console.log(game);
        if(game.complete==100){
          this.nextRound = game.round+1;
          
        }
      }
      // console.log("NEXT ROUND IS" + this.nextRound);

      this.allResults = [];
    
    for(let game of this.games){
      console.log();
      if(game.ateam == this.myTeam.name || game.hteam==this.myTeam.name){
        if((game.round < this.nextRound)){
          this.allResults.push(game);
        }
      }
    }
    // console.log(this.allResults);
    });
  }
}
