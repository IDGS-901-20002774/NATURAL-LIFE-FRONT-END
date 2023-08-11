import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MenuComponent } from './modules/menu/menu.component';
import { PanelAdmComponent } from './modules/panel-adm/panel-adm.component';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { EmpleadoComponent } from './modules/empleado/empleado.component';
import { ProcesoComponent } from './modules/proceso/proceso.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { PaginaNoEncontradaComponent } from './modules/pagina-no-encontrada/pagina-no-encontrada.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { MateriaPrimaComponent } from './modules/materia-prima/materia-prima.component';
import { CompraComponent } from './modules/compra/compra.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'catalogo-productos', component: CatalogoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'empleados', component: EmpleadoComponent},
  {path: 'proveedores', component: ProveedorComponent},
  {path: 'materia-prima', component: MateriaPrimaComponent},
  {path: 'compra-materia', component: CompraComponent},
  {path: 'procesos', component: ProcesoComponent},
  {path: 'panel', component: PanelAdmComponent},
  {path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
