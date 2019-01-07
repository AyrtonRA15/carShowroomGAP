import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  @Input() carsSelected: ICar[];
  @Output() close = new EventEmitter();

  constructor(private _car: CarService) {}

  ngOnInit() {}

  getCarPicURL(car: ICar) {
    return this._car.getPicURL(car.brand, car.model, false);
  }

  closeCompare() {
    this.close.emit();
  }
}
