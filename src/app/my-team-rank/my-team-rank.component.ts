import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import {DataServiceService} from '../data.service';
import {Team} from '../team';
import {Game} from '../game';
import {Tip} from '../tip';
import { Ladder } from '../ladder';

@Component({
  selector: 'app-my-team-rank',
  templateUrl: './my-team-rank.component.html',
  styleUrls: ['./my-team-rank.component.css']
})
export class MyTeamRankComponent implements OnInit {
  myTeam: Team;
  allTeams: Ladder[];
  constructor(private dataService: DataServiceService) {
      this.dataService.getTeam().subscribe(team => {
      if (team) {

        this.myTeam = team;
      }
      
    });
   }

  ngOnInit() {
    this.getLadder();
  }

  getLadder(): void {
    this.dataService.getLadder().subscribe(temp => { this.allTeams = temp;
      console.log(this.allTeams);
    });
  }
}
