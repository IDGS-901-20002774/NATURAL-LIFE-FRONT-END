import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorComponent } from './proveedor.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ProveedorComponent
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
    ProveedorComponent
  ]
})
export class ProveedorModule { }
