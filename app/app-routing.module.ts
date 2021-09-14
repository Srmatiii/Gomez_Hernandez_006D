import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./dex/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./dex/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./dex/pokemones/pokemones.module').then( m => m.PokemonesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
