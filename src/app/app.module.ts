import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MenuComponent } from './modules/menu/menu.component';
import { PanelAdmComponent } from './modules/panel-adm/panel-adm.component';
import { EmpleadoComponent } from './modules/empleado/empleado.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { MateriaPrimaComponent } from './modules/materia-prima/materia-prima.component';
import { PedidoComponent } from './modules/pedido/pedido.component';
import { ElaboracionComponent } from './modules/elaboracion/elaboracion.component';
import { VentaComponent } from './modules/venta/venta.component';
import { CompraComponent } from './modules/compra/compra.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { RegistroComponent } from './modules/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PanelAdmComponent,
    EmpleadoComponent,
    UsuarioComponent,
    ClienteComponent,
    ProveedorComponent,
    MateriaPrimaComponent,
    PedidoComponent,
    ElaboracionComponent,
    VentaComponent,
    CompraComponent,
    ProductoComponent,
    CatalogoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
