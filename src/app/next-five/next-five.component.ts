import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import {DataServiceService} from '../data.service'

@Component({
  selector: 'app-next-five',
  templateUrl: './next-five.component.html',
  styleUrls: ['./next-five.component.css']
})

export class NextFiveComponent implements OnInit {
  myTeam: Team;
  
  games:Game[];
  nextFive: Game[];
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

      this.nextFive = [];
    
    for(let game of this.games){
      if(game.ateam == this.myTeam.name || game.hteam==this.myTeam.name){
        if((game.round >= this.nextRound) && (this.nextFive.length < 5)){
          this.nextFive.push(game);
        }
      }
    }
    });
  }
}
