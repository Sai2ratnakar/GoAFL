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
  myRival: string;
  teams: Team[];

  games: Game[];
  nextFive: Game[];
  nextRound: number = 0;
  constructor(private dataService: DataServiceService) {
    // this.myTeam = this.data.getSelectedTeam();
    this.dataService.getTeam().subscribe(team => {
      if (team) {
        this.myTeam = team;        
      }
      if (this.myRival) {
        // console.log(this.myRival);
           this.getGames(this.myRival,this.myTeam);
         }
    });
    this.getAFLTeams();
  }

  updateGames(event) {
    
      this.myRival=event.target.value;
      // console.log(this.myRival);
      this.getGames(this.myRival,this.myTeam);
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  ngOnInit() {
  }
  getGames(myRival:string, myTeam:Team) {
    this.dataService.getGames().subscribe(games => {
    this.games = games;
      // console.log("Games" + this.games.length);

       this.nextFive = [];
      console.log(this.myTeam.name);
      console.log(this.myRival);
    for (let game of this.games) {
      //console.log(game);
      // console.log(this.myTeam.id);
      // console.log(this.myRival);
      if (game.ateam == this.myTeam.name || game.ateam == this.myRival) {

        if (game.hteam == this.myTeam.name || game.hteam == this.myRival) {
          // if((game.round = this.nextRound)){
          this.nextFive.push(game);
          console.log(game);
          console.log(this.nextFive);
        }
      }
      }
    });
  }
}

