import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  usuario = {
    Nombre:'',
    Nacimiento:'',
    Favorito:'',
    email:'',
    password:''
  }


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Guardar');
    console.log(this.usuario);
  }

}