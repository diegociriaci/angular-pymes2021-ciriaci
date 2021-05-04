import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosFamiliasComponent } from "./components/articulos-familias/articulos-familias.component";
import { MockArticulosFamiliasService } from "./services/mock-articulos-familias.service";
import { ArticulosFamiliasService } from './services/articulos-familias.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliasComponent
  ],
  bootstrap: [AppComponent],
  providers: [MockArticulosFamiliasService, ArticulosFamiliasService]
})
export class AppModule {}
