import { Component } from '@angular/core';
import { Biker } from '../models/biker';
import { BikersService } from '../services/bikers.service';
import { Const } from '../Const/Const';
import { Race } from '../models/race';
import { RaceService } from '../services/race.service';
import { Points } from '../models/points';
import { PointsService } from '../services/points.service';
import { NationalsService } from '../services/national.service';
import { National } from '../models/national';

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
  nationals: National[] = [];
  newNameRace: string = "";
  newNational: string = "";
  newNameRider: string = "";
  newNationalIdRider: any;
  idRiderDelete: any;
  idRiderUpdate: any;
  idRaceUpdate: any;
  newPointUpdate: any;
  constructor(
    private bikersService: BikersService,
    private raceService: RaceService,
    private pointsService: PointsService,
    private nationalService: NationalsService
  ) {}

  ngOnInit(): void {
    this.getAllBikers();
    this.fetchListRace();
    this.fetchListPoints();
    this.fetchListNational();
    this.sortDescendBikerByTotalPoints();
  }

  fetchListRace() {
    this.raceService.getAllRaces().subscribe(listRace => { this.races = listRace});
  }

  fetchListPoints() {
    this.pointsService.getAllPoints().subscribe(listPoints => { this.points = listPoints;})
  }

  fetchListNational() {
    this.nationalService.getAllNationals().subscribe(listNational => { this.nationals = listNational;})
  }

  getAllBikers(): void {
    this.bikersService.getAllBikers().subscribe(bikers =>{ this.bikers = bikers;});
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

  deleteRace() {
    if(this.newNameRace == "") return;
    let idRace = this.races.filter(race => race.name == this.newNameRace);
    this.raceService.deleteRace(idRace[0].id).subscribe(() => {
      this.fetchListRace();
    });
  }

  addNewNational() {
    if(this.newNational == "") return;
    let national = {
      id: 0,
      name: this.newNational
    }
    this.nationalService.createNational(national).subscribe(() => {
      this.fetchListNational();
    });
  }

  addNewRider() {
    if( this.newNameRider == "" && this.newNationalIdRider == "") return;
    let biker: Biker = {
      id: 0,
      name: this.newNameRider,
      nationalId: this.newNationalIdRider,
      national : {
        id: 0,
        name: "string"
    }
    }
    this.bikersService.createBiker(biker).subscribe(() => {
      this.getAllBikers();
    });
  }

  deleteRider() {
    if(this.idRiderDelete == "") return;
    this.bikersService.deleteBiker(this.idRiderDelete).subscribe(() => {
      this.getAllBikers();
    });
  }

  updatePoint() {
    if(this.idRiderUpdate == "" || this.idRaceUpdate == "" || this.newPointUpdate == "") return;
    let point: Points = {
      id: 0,
      point: this.newPointUpdate,
      bikerId: this.idRiderUpdate,
      biker: {
        id: 0,
        name: "string",
        nationalId: 0,
        national : {
          id: 0,
          name: "string"
        }
      },
      racesId: this.idRaceUpdate,
      races: {
        id: 0,
        name: "string"
      }
    }
    this.pointsService.createPoint(point).subscribe(() => {
      this.fetchListPoints();
    });
  }
}
