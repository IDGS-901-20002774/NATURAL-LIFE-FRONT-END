import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MenuComponent } from './modules/menu/menu.component';
import { PanelAdmComponent } from './modules/panel-adm/panel-adm.component';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { RegistroComponent } from './modules/registro/registro.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'catalogo-productos', component: CatalogoComponent},
  {path: 'panel', component: PanelAdmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
