import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './usuarios/list/list.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

export const routes: Routes = [
  {
    path: 'home', component: ListComponent
  },
  {
    path: 'usuario/:id', component: UsuarioComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
