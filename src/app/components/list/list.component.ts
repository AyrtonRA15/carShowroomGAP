import { Component, OnInit } from '@angular/core';
import { ICar, IBrand } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  carList: ICar[] = [];
  brandList: IBrand[] = [];
  carsToCompare: number[] = [];
  carsSelected: ICar[] = [];
  page = 0;
  pageSize = 12;
  pagedCarList: ICar[] = [];
  selectionMode = false;
  compareMode = false;

  constructor(private _car: CarService) {}

  ngOnInit() {
    this._car.getCars().subscribe((carList: ICar[]) => {
      this.carList = carList;

      this.carList.sort((car1: ICar, car2: ICar) => {
        // Sort by brand name first
        if (car1.brand > car2.brand) {
          return 1;
        } else if (car1.brand < car2.brand) {
          return -1;
        }

        // Sort by model name second
        if (car1.model < car2.model) {
          return -1;
        } else if (car1.model > car2.model) {
          return 1;
        } else {
          return 0;
        }
      });

      // this.carList.map((car: ICar) => {
      //   if (car.brand)
      // })

      // const uniq = [
      //   ...new Set(carList.map((car: ICar) => car.brand)),
      // ];

      // console.log(uniq);

      // console.log(this.carList);
    });
  }

  onSelectToCompareClicked() {
    this.selectionMode = !this.selectionMode;
    this.carsToCompare = [];
  }

  onCompareClicked() {
    this.compareMode = true;
    this.carsSelected = this.carList.filter((car: ICar) =>
      this.isCarSelected(car.id),
    );
  }

  onCloseCompare() {
    this.compareMode = false;
    this.selectionMode = false;
    this.carsToCompare = [];
  }

  isCarSelected(id: number): boolean {
    return this.carsToCompare.includes(id);
  }

  onItemClicked(carId: number) {
    if (!this.isCarSelected(carId) && this.carsToCompare.length < 3) {
      this.carsToCompare.push(carId);
    } else if (this.isCarSelected(carId)) {
      this.carsToCompare.splice(this.carsToCompare.indexOf(carId), 1);
    }
  }

  getPagedList(): ICar[] {
    // if ((this.page + ) * this.pageSize <= this.carList.length) {
    //   return this.carList.slice(
    //     this.page * this.pageSize,
    //     (this.page + 1) * this.pageSize,
    //   );
    // } else {
    //   return this.carList.slice(this.page, this.carList.length);
    // }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? []
          : this.brandList
              .filter(
                (b) =>
                  b.name.toLowerCase().indexOf(term.toLowerCase()) >
                  -1,
              )
              .slice(0, 10),
      ),
    )

  formatter = (x: { name: string }) => x.name;
}
