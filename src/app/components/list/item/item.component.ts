import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() car: ICar;

  constructor(private _car: CarService) {}

  ngOnInit() {}

  getPicURL() {
    return this._car.getPicURL(this.car.brand, this.car.model);
  }
}
