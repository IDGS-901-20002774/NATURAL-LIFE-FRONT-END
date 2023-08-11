import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    EmpleadoComponent,
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
    EmpleadoComponent,
  ]
})
export class EmpleadoModule { }
