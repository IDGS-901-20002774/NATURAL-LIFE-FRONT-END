import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { MenuComponent } from './modules/menu/menu.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { PedidoComponent } from './modules/pedido/pedido.component';
import { VentaComponent } from './modules/venta/venta.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { CatalogoComponent } from './modules/catalogo/catalogo.component';
import { ProcesoModule } from './modules/proceso/proceso.module';
import { EmpleadoModule } from './modules/empleado/empleado.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { PaginaNoEncontradaModule } from './modules/pagina-no-encontrada/pagina-no-encontrada.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { MateriaPrimaModule } from './modules/materia-prima/materia-prima.module';
import { CompraModule } from './modules/compra/compra.module';
import { RegistroModule } from './modules/registro/registro.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteComponent,
    PedidoComponent,
    VentaComponent,
    ProductoComponent,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule, 
    RegistroModule,
    UsuarioModule,
    ProcesoModule,
    EmpleadoModule,
    ProveedorModule,
    MateriaPrimaModule,
    CompraModule,
    PaginaNoEncontradaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
