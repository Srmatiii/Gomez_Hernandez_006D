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
      icon: 'paw-outline',
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'sunny-outline', 
      name: 'Categorias', 
      redirecTo: '/categorias'
    },
    {
      icon: 'alarm-outline', 
      name: 'Pokemones', 
      redirecTo: '/pokemones'
    },
  ]

  constructor() {}

}

