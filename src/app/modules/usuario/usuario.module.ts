import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, UrlSegmentGroup } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartidoModule } from '../compartido/compartido.module';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompartidoModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
