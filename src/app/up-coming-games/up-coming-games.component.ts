import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import { ActivatedRoute } from '@angular/router';

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
  myTeamId: number;
  constructor(private data: DataServiceService,
    private activatedRoute: ActivatedRoute) {
    //this.myTeam = this.dataService.getSelectedTeam();
    // this.data.myteam$.subscribe(team=>{this.myTeam=team
    
    // })
    
   }

  ngOnInit() {
  
    this.getGames();
  // if(this.selected){
  //   this.getTeams(this.team);
  //   console.log("Chekced" + this.team);
  // }
  
  }

  getGames() {
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
