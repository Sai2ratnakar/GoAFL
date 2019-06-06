import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import {DataServiceService} from '../data.service'

@Component({
  selector: 'app-next-game-prediction',
  templateUrl: './next-game-prediction.component.html',
  styleUrls: ['./next-game-prediction.component.css']
})
export class NextGamePredictionComponent implements OnInit {
  myTeam: Team;
  
  nextGame: Tip[];
  tips: Tip[];
  // games:Game[];
  // nextRound: Game[];
  tipRound: number=0;
  constructor(private data: DataServiceService) {
    this.myTeam = this.data.getSelectedTeam();
   }

  ngOnInit() {
  
    // this.getTeams();
    this.getPrediction();
  // if(this.selected){
  //   this.getTeams(this.team);
  //   console.log("Chekced" + this.team);
  // }
  
  }

  // getTeams() {
  //   this.data.getGames().subscribe(games => 
  //     { this.games = games;
  //     console.log("Games" + this.games.length);
        
  //     for(let game of this.games) {
  //       // console.log(game);
  //       if(game.complete==0){
  //         this.nextRound = game.round;
  //         break;
  //       }
  //     }

  //     console.log("NEXT ROUND IS" + this.nextRound);

  //     this.nextGame = [];
    
    // for(let game of this.games){
      
    //   if(game.ateam == this.myTeam.name || game.hteam==this.myTeam.name){
    //     if((game.round >= this.nextRound) && (this.nextGame.length < 1)){
    //       this.nextGame.push(game);
    //     }
    //   }
    // }
    // console.log(this.nextGame);
  //   });
  // }

  getPrediction(): void {
    this.data.getPrediction().subscribe(tips => { 
      this.tips = tips;
      console.log("Games" + this.tips.length); 
      
      this.nextGame = [];
      for(let game of this.tips){
        
        if(game.ateam == this.myTeam.name || game.hteam==this.myTeam.name){
          if(this.nextGame.length < 1){
            this.nextGame.push(game);
          }
        }
      }
      console.log(this.nextGame);
    }); 
  }
}
