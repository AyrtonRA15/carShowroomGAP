import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  carList: ICar[] = [];

  constructor(private _car: CarService) {}

  ngOnInit() {
    this._car.getCars().subscribe((carList: ICar[]) => {
      this.carList = carList;

      console.log(this.carList);
    });
  }
}
