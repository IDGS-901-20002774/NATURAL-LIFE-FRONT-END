import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartidoModule } from '../compartido/compartido.module';
import { CompraComponent } from './compra.component';

@NgModule({
  declarations: [
    CompraComponent
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
    CompraComponent
  ]
})
export class CompraModule { }
