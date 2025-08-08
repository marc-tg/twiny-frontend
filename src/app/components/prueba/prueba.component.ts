import { Component } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';

@Component({
  selector: 'app-prueba',
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
  standalone: true
})
export class PruebaComponent {

constructor(private pruebaService : PruebaService) {
  this.llamarApi();
};

  llamarApi() {
    console.log('Llamando a la API...');
    this.pruebaService.getData().subscribe(
      data => {
        console.log('Datos recibidos:', data);    
      },
      error => {
        console.error('Error al llamar a la API:', error);
      } 
    );


}
}