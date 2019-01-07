export interface ICar {
  id: number;
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

export interface IBrand {
  name: string;
}
