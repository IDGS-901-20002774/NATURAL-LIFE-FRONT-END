import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcesoComponent } from './proceso.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ProcesoComponent,
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
    ProcesoComponent,
  ]
})
export class ProcesoModule { }
