import { Component } from '@angular/core';
import { Biker } from '../models/biker';
import { BikersService } from '../services/bikers.service';
import { Const } from '../Const/Const';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {
  constructor(
    private bikersService: BikersService
  ) {}

  ngOnInit(): void {
    this.getAllBikers();
  }


  bikers: Biker[] = [];
  biker: any;

  getAllBikers(): void {
    this.bikersService.getAllBikers().subscribe(bikers =>{ this.bikers = bikers; console.log(bikers[0].ame.Points)});
  }

  formatBiker(biker: Biker) {
    return biker
  }
}
