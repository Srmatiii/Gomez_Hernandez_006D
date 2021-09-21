import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[
    {
      icon: 'cloudy-outline',
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'sunny-outline', 
      name: 'Categorias', 
      redirecTo: '/categorias'
    },
    {
      icon: 'moon-outline', 
      name: 'Pokemones', 
      redirecTo: '/pokemones'
    },
  ]

  constructor() {}

}

