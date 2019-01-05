import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../interfaces/car.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carsUrl = 'assets/cars-data-set.json';

  constructor(private _http: HttpClient) {}

  getCars(): Observable<ICar[]> {
    return this._http.get<ICar[]>(this.carsUrl);
  }

  getCarById(id: string): Observable<ICar[]> {
    // const options = id
    //   ? { params: new HttpParams().set('id', id) }
    //   : {};
    // console.log(options);

    const params = new HttpParams().set('id', id);

    return this._http.get<ICar[]>(this.carsUrl, { params });
  }
}
