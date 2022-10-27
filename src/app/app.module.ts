import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';
import { CitasComponent } from './citas/citas/citas.component';
import { CreateCitaComponent } from './citas/create-cita/create-cita.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCitaComponent } from './citas/edit-cita/edit-cita.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { CreateClienteComponent } from './clientes/create-cliente/create-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { PqrsComponent } from './pqrs/pqrs/pqrs.component';
import { CreatePqrsComponent } from './pqrs/create-pqrs/create-pqrs.component';
import { EditPqrsComponent } from './pqrs/edit-pqrs/edit-pqrs.component';
import { VentanillasComponent } from './ventanillas/ventanillas/ventanillas.component';
import { CreateVentanillaComponent } from './ventanillas/create-ventanilla/create-ventanilla.component';
import { EditVentanillaComponent } from './ventanillas/edit-ventanilla/edit-ventanilla.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    CitasComponent,
    CreateCitaComponent,
    EditCitaComponent,
    LoginComponent,
    RegisterComponent,
    UsuariosComponent,
    CreateUsuarioComponent,
    EditUsuarioComponent,
    ClientesComponent,
    CreateClienteComponent,
    EditClienteComponent,
    PqrsComponent,
    CreatePqrsComponent,
    EditPqrsComponent,
    VentanillasComponent,
    CreateVentanillaComponent,
    EditVentanillaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'}),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
