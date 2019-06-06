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
<<<<<<< HEAD
  // forRival:Team[];
  myTeam:Team;
  // myRival: Team;
=======
  myTeam:Team;
>>>>>>> 73896653753a81f46664ac442bb1f76b39f66299

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
<<<<<<< HEAD
    // localStorage.setItem('myRival', this.myRival.toString());
    // this.getPrediction();
=======

    // this.getPrediction();

>>>>>>> 73896653753a81f46664ac442bb1f76b39f66299
  }
}
