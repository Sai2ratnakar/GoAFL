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
      this.data.getTeam().subscribe(team => {
      if (team) {

        this.myTeam = team;
        this.getPrediction();
      }
    });
   }

  ngOnInit() {
   }
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
      // console.log(this.nextGame);
    }); 
  }
}
