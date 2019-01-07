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
  page = 0;
  pageSize = 12;
  pagedCarList: ICar[] = [];

  constructor(private _car: CarService) {}

  ngOnInit() {
    this._car.getCars().subscribe((carList: ICar[]) => {
      this.carList = carList;

      const uniq = [
        ...new Set(carList.map((car: ICar) => car.brand)),
      ];

      console.log(uniq);

      console.log(this.carList);
    });
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
