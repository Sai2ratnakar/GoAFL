import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
  myTeam: Team;
  myRival: string='Geelong';
  
  games:Game[];
  nextFive: Game[];
  nextRound: number=0;
  constructor(private data: DataServiceService) {
    this.myTeam = this.data.getSelectedTeam();
    //this.myRival = this.data.getRivalTeam();
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

      // for(let game of this.games) {
      //   // console.log(game);
      //   if(game.complete==0){
      //     this.nextRound = game.round;
      //     break;
      //   }
      // }
      // console.log("NEXT ROUND IS" + this.nextRound);

      this.nextFive = [];
    
    for(let game of this.games){
      // console.log(game);
      if(game.ateam == this.myTeam.name || game.ateam==this.myRival){
        
        if(game.hteam == this.myTeam.name || game.hteam==this.myRival){
          // if((game.round = this.nextRound)){
            this.nextFive.push(game);
      
        }
      }
  }
    });
  }
}

