import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginaNoEncontradaComponent
  ]
})
export class PaginaNoEncontradaModule { }
