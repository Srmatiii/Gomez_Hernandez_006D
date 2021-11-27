import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService, Datos } from 'src/app/services/login.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  datos : Datos [] = [];
  newDato : Datos = <Datos>{};

  @ViewChild('myList')myList : IonList;


  constructor(private storageService: LoginService, 
    private plt: Platform, private toastcontroller: ToastController ) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }


  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(datos=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  updateDatos(datos: Datos ){
    datos.Nombre = `UPDATED: ${datos.Nombre}`;
    datos.modified = Date.now();
    this.storageService.updateDatos(datos).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  
  deleteDatos(datos: Datos){
    this.storageService.deleteDatos(datos.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastcontroller.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

}