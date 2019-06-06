import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DataServiceService } from '../data.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
  myTeam: Team;
  myRival: Team;
  teams: Team[];

  games: Game[];
  nextFive: Game[];
  nextRound: number = 0;
  constructor(private dataService: DataServiceService) {
    // this.myTeam = this.data.getSelectedTeam();
    this.dataService.getTeam().subscribe(team => {
      if (team) {

        this.myTeam = team;
        if (this.myRival) {

          this.getGames();
        }
      }
    });
    this.getAFLTeams();
  }

  updateGames() {
    if (this.myTeam) {
      this.getGames();
    }
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  ngOnInit() {
  }
  getGames() {
    this.dataService.getGames().subscribe(games => {
    this.games = games;
      // console.log("Games" + this.games.length);

      // for(let game of this.games) {
      //   // console.log(game);
      //   if(game.complete==0){
      //     this.nextRound = game.round;
      //     break;
      //   }
      // }
      // console.log("NEXT ROUND IS" + this.nextRound);

      this.nextFive = [];

      for (let game of this.games) {
        //console.log(game);
        if (game.ateam == this.myTeam.name || game.ateam == this.myRival.name) {

          if (game.hteam == this.myTeam.name || game.hteam == this.myRival.name) {
            // if((game.round = this.nextRound)){
            this.nextFive.push(game);
console.log(game);
          }
        }
      }
    });
  }
}

