import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() car: ICar;

  constructor() { }

  ngOnInit() {
  }

}
