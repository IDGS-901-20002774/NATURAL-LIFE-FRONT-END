import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdmComponent } from '../panel-adm/panel-adm.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PanelAdmComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PanelAdmComponent
  ]
})
export class CompartidoModule { }
