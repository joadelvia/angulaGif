import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  busqueda: string = '';
  constructor( private gifsService: GifsService ) {}

  buscar() {
    console.log(this.busqueda);
    //const valor = this.txtBuscar.nativeElement.value;
    const valor=this.busqueda;
    if ( valor.trim().length === 0 ) {
      return;
    }

    this.gifsService.buscarGifs( valor );
    this.busqueda = "";
    //this.txtBuscar.nativeElement.value = '';
  }

}
