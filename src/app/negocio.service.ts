import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  protected negocios = [
    {
      "nombre": "Restaurante Buen Comer",
      "direccion": "C. Mayor, 8, 03002 Alicante",
      "ventas": 4250,
      "id": 1,
      
    },
    {
      "nombre": "Restaurante La Sal",
      "direccion": " P.º Adolfo Suárez, pabellon 3, 03130 Santa Pola, Alicante",
      "ventas": 3200,
      "id": 2,
    },
    {
      "nombre": "Bar restaurant Quesada",
      "direccion": "  Av. Vicente Blasco Ibañez, 90, 03130 Santa Pola, Alicante",
      "ventas": 4300,
      "id": 3,
    },
   
  ]

  constructor() { }

  public getNegocio(): Array<any> {
    return this.negocios;
  }
}
