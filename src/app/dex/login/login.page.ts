import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
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
