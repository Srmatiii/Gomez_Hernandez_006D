import { Component, OnInit } from '@angular/core';
import { LoginService, Datos } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  log : Datos[] = [];
  loginUrl =' ' ;
  user = {
    nombre : '', 
    password: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private login: LoginService){ }

  ngOnInit() { 
    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'inicio';
    console.log(this.loginUrl); 
  }
  
  signIn(){

    this.login.getDatos().then(
      (Datos) => {
        this.log = Datos;
        let valida = this.log.find(login => login.Nombre === this.user.nombre && login.password === this.user.password);
        if(valida){
          console.log(valida.Nombre, valida.password);
          localStorage.setItem('authenticated','1');
          this.router.navigateByUrl(this.loginUrl);
        }
        else{
          
        }
      }
    );

  }

  
}
