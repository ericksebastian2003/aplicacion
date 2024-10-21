import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resultado: string = '';
  operacion: string = '';
  agregarNumero(numero: string) {
    this.resultado += numero;
  }

  operar(operador: string) {
    if (this.resultado !== '') {
      this.resultado += operador;
    }
  }

  calcular() {
    try {
      this.resultado = eval(this.resultado); // eval es útil pero puede ser inseguro en algunas circunstancias, cuidado si expandes la app
    } catch (e) {
      this.resultado = 'Error';
    }
  }

  limpiar() {
    this.resultado = '';
  }
  constructor() {}
  

}
