import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../interfaces/car.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carsUrl = 'assets/cars-data-set.json';

  constructor(private _http: HttpClient) {}

  private getFolderName(name: string) {
    return name.replace(' ', '-').toLowerCase();
  }

  getPicURL(
    brand: string,
    model?: string,
    mainPic: boolean = true,
  ): string {
    let picURL = '';
    if (model) {
      const picName = mainPic ? 'main' : 'sec';
      picURL =
        '/assets/images/' +
        this.getFolderName(brand) +
        '/' +
        this.getFolderName(model) +
        '/' +
        picName +
        '.jpg';
    } else {
      picURL =
        '/assets/images/' + this.getFolderName(brand) + '/logo.png';
    }
    return picURL;
  }

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this.carsUrl);
  }

  getCarById(id: number): Observable<ICar> {
    return this.getCars().pipe(
      map((cars) => cars.filter((car) => car.id === id)[0]),
    );
  }
}
