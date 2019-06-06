import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import{NextGamePredictionComponent } from '../next-game-prediction/next-game-prediction.component';


@Component({
  selector: 'app-user-fav-team',
  templateUrl: './user-fav-team.component.html',
  styleUrls: ['./user-fav-team.component.css']
})
export class UserFavTeamComponent implements OnInit {
  selectedTeam: Team;
  teams:Team[];
  myTeam:Team;

  constructor(private dataService: DataServiceService) {
    this.myTeam = this.dataService.getSelectedTeam();
   }

  ngOnInit() {
    this.getAFLTeams();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

  onSelect(team: Team): void{
    this.myTeam = team;
    localStorage.setItem('myTeam', this.myTeam.toString());

    // this.getPrediction();

  }
}
