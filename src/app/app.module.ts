import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NgbPaginationModule,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';
import { ArticulosService } from './services/articulos.service';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ModalDialogService } from './services/modal-dialog.service';
import { MyInterceptor } from './shared/my-interceptor';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MockClientesService } from './services/mock-clientes.service';
import { ClientesService } from './services/clientes.service';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpresasService } from './services/empresas.service';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactosService } from './services/contactos.service';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasService } from './services/categorias.service';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonasService } from './services/personas.service';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasService } from './services/ventas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'contactos', component: ContactosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'personas', component: PersonasComponent },
      { path: 'ventas', component: VentasComponent }
    ]),
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    ModalDialogComponent,
    ClientesComponent,
    EmpresasComponent,
    ContactosComponent,
    CategoriasComponent,
    PersonasComponent,
    VentasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    MockArticulosFamiliasService,
    ArticulosFamiliasService,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
