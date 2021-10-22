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
      name: 'Iniciar Sesion', 
      redirecTo: '/categorias'
    },
    {
      icon:'water-outline',
      name:'Login',
      redirecTo: '/login'
    },
    {
      icon: 'star-outline',
      name: 'Api',
      redirecTo: '/api'
    }
  ]

  constructor() {}

}

