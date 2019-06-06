import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import { Router } from '@angular/router';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import{NextGamePredictionComponent } from '../next-game-prediction/next-game-prediction.component';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-fav-team',
  templateUrl: './user-fav-team.component.html',
  styleUrls: ['./user-fav-team.component.css']
})
export class UserFavTeamComponent implements OnInit {
  selectedTeam: Team;
  teams:Team[];
   myTeam:Team;
 

  constructor(private dataService: DataServiceService, public router: Router) {
     this.dataService.getTeam().subscribe(team => {
      if (team) {
        this.myTeam = team;
      }
    });
   }

  ngOnInit() {
    this.getAFLTeams();
  }
/* 
  selectionChange(tab) {
if(tab === 'tab1') {
this.router.navigate(['/upcoming']);
}
  } */
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  onSelect(team: Team): void{
   this.myTeam=team;
//  console.log(team);
    this.dataService.setTeam(team);
    
  }
}
