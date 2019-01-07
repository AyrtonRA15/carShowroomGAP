import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  car: ICar;

  pics: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _car: CarService,
  ) {
    this._route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('carId'));

      this._car
        .getCarById(params.get('carId'))
        .subscribe((car: ICar[]) => {
          console.log(car);
          this.car = car[31];
          this.getCarPictures();
        });
    });
  }

  getCarPictures() {
    this.pics.push(
      this._car.getPicURL(this.car.brand, this.car.model),
    );
    this.pics.push(
      this._car.getPicURL(this.car.brand, this.car.model, false),
    );
  }

  ngOnInit() {}
}
