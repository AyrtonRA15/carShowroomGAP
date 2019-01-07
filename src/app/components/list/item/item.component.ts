import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() car: ICar;
  @Input() selected: boolean;
  @Input() selectionMode: boolean;
  @Output() itemClicked = new EventEmitter<number>();

  constructor(private _car: CarService, private _router: Router) {}

  ngOnInit() {}

  getPicURL() {
    return this._car.getPicURL(this.car.brand, this.car.model);
  }

  onItemClicked() {
    if (this.selectionMode) {
      this.itemClicked.emit(this.car.id);
    } else {
      this._router.navigate(['detail', this.car.id]);
    }
  }
}
