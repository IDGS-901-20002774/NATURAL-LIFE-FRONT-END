import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartidoModule } from '../compartido/compartido.module';
import { MateriaPrimaComponent } from './materia-prima.component';



@NgModule({
  declarations: [
    MateriaPrimaComponent
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
    MateriaPrimaComponent
  ]
})
export class MateriaPrimaModule { }
