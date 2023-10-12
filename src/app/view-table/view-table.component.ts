import { Component } from '@angular/core';
import { Biker } from '../models/biker';
import { BikersService } from '../services/bikers.service';
import { Const } from '../Const/Const';
import { Race } from '../models/race';
import { RaceService } from '../services/race.service';
import { Points } from '../models/points';
import { PointsService } from '../services/points.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {
  bikers: Biker[] = [];
  biker: any;
  races: Race[] = [];
  points: Points[] = [];
  newNameRace: string = "";
  constructor(
    private bikersService: BikersService,
    private raceService: RaceService,
    private pointsService: PointsService
  ) {}

  ngOnInit(): void {
    this.getAllBikers();
    this.fetchListRace();
    this.fetchListPoints();
    this.sortDescendBikerByTotalPoints();
  }

  fetchListRace() {
    this.raceService.getAllRaces().subscribe(listRace => { this.races = listRace; console.log("race", listRace)})
  }

  fetchListPoints() {
    this.pointsService.getAllPoints().subscribe(listPoints => { this.points = listPoints; console.log("points", listPoints)})
  }

  getAllBikers(): void {
    this.bikersService.getAllBikers().subscribe(bikers =>{ this.bikers = bikers; console.log("bikers", bikers)});
  }

  formatBiker(biker: Biker) {
    return 
  }

  sortDescendBikerByTotalPoints() {
    this.bikers = this.bikers.sort((a, b) => this.getTotalPoints(b) - this.getTotalPoints(a));
  }

  getTotalPoints(biker: Biker) {
    let total = 0;
    this.points.forEach(point => {
      if (point.bikerId == biker.id) {
        total += point.point;
      }
    });
    return total;
  }

  getPointByRace(biker: Biker, race: Race) {
    let currentPoint = 0;
    this.points.forEach(point => {
      if(point.bikerId == biker.id && point.racesId == race.id) {
        currentPoint = point.point;
      }
    });
    return currentPoint;
  }

  sortFunction(a: number, b: number) {
    return a - b;
  }

  addNewRace() {
    if(this.newNameRace == "") return;
    let race:Race = {
      id: 0,
      name: this.newNameRace
    }
    this.raceService.createRace(race).subscribe(() => {
      this.fetchListRace();
    });
  }

}
