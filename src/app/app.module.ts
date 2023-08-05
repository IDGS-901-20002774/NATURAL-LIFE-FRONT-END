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
import { VentaComponent } from './modules/venta/venta.component';
import { CompraComponent } from './modules/compra/compra.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { InsertarComponent } from './modules/elaboracion/insertar/insertar.component';
import { EliminarComponent } from './modules/elaboracion/eliminar/eliminar.component';
import { ModificarComponent } from './modules/elaboracion/modificar/modificar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
    VentaComponent,
    CompraComponent,
    ProductoComponent,
    CatalogoComponent,
    RegistroComponent,
    InsertarComponent,
    EliminarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
