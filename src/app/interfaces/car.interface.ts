export interface ICar {
  id: string;
  model: string;
  year: number;
  brand: string;
  price: number;
  detail: {
    engine: string;
    horsepower: number;
    torque: number;
    acceleration: number;
    payload: number;
    fuelTank: number;
  };
}
