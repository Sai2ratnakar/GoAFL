import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';

@Component({
  selector: 'app-up-coming-games',
  templateUrl: './up-coming-games.component.html',
  styleUrls: ['./up-coming-games.component.css']
})
export class UpComingGamesComponent implements OnInit {
  myTeam: Team;
  
  games:Game[];
  upComing: Game[];
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
        if(game.complete==0){
          this.nextRound = game.round;
          break;
        }
      }
      // console.log("NEXT ROUND IS" + this.nextRound);

      this.upComing = [];
    
    for(let game of this.games){
      // console.log(game);
      if((game.round >= this.nextRound)){
        this.upComing.push(game);
      }
    }
    });
  }
}
