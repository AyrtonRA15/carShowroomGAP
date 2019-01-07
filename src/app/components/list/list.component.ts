import { Component, OnInit } from '@angular/core';
import { ICar, IBrand } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { Observable } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  carList: ICar[] = []; // Full car list
  brandList: string[] = [];
  carsPagedList: ICar[] = []; // Car list filtered by page
  filteredList: ICar[] = []; // Car list filtered by by search criteria

  carsToCompare: number[] = []; // Cars id to compare
  carsSelected: ICar[] = []; // Cars to compare
  maxCarsToCompare = 3;

  page = 1;
  pageSize = 12;
  collectionSize = 0;
  pagedCarList: ICar[] = [];
  selectionMode = false;
  compareMode = false;
  searchText: string;
  brandSelected: string;

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

      this.getPagedList(this.carList);

      this.brandList = this.getBrandList(carList);
    });
  }

  getBrandList(carList: ICar[]): string[] {
    const brandList = [];
    carList.map((car: ICar) => {
      if (brandList.indexOf(car.brand) < 0) {
        brandList.push(car.brand);
      }
    });
    return brandList;
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
    if (
      !this.isCarSelected(carId) &&
      this.carsToCompare.length < this.maxCarsToCompare
    ) {
      this.carsToCompare.push(carId);
    } else if (this.isCarSelected(carId)) {
      this.carsToCompare.splice(this.carsToCompare.indexOf(carId), 1);
    }
  }

  getPagedList(list: ICar[]) {
    const limitInf = (this.page - 1) * this.pageSize;
    let limitSup = (this.page - 1) * this.pageSize + this.pageSize;
    this.collectionSize = list.length;

    if (list.length < limitSup) {
      limitSup = list.length;
    }
    this.carsPagedList = list.slice(limitInf, limitSup);
  }

  onPageChange(page: number) {
    this.page = page;
    if (this.brandSelected) {
      this.getPagedList(this.filteredList);
    } else {
      this.getPagedList(this.carList);
    }
  }

  onBrandSelected(e: any) {
    // Search by brand name
    this.brandSelected = e.item;
    this.page = 1;
    this.filteredList = this.carList.filter(
      (car: ICar) => car.brand === this.brandSelected,
    );
    this.getPagedList(this.filteredList);
  }

  getLogoURL(brand: string) {
    return this._car.getPicURL(brand);
  }

  // Filter search text in the autocomplete
  // show maximum 10 suggestions in the dropdown
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1
          ? []
          : this.brandList
              .filter(
                (b) =>
                  b.toLowerCase().indexOf(term.toLowerCase()) > -1,
              )
              .slice(0, 10),
      ),
    )

  clearSearch() {
    this.brandSelected = undefined;
    this.searchText = '';
    this.page = 1;
    this.filteredList = [];
    this.getPagedList(this.carList);
  }
}
