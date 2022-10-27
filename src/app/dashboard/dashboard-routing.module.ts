import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';

import { CitasComponent } from '../citas/citas/citas.component';
import { CreateCitaComponent } from '../citas/create-cita/create-cita.component';
import { EditCitaComponent } from '../citas/edit-cita/edit-cita.component';
import { ClientesComponent } from '../clientes/clientes/clientes.component';
import { CreateClienteComponent } from '../clientes/create-cliente/create-cliente.component';
import { EditClienteComponent } from '../clientes/edit-cliente/edit-cliente.component';
import { PqrsComponent } from '../pqrs/pqrs/pqrs.component';
import { CreatePqrsComponent } from '../pqrs/create-pqrs/create-pqrs.component';
import { EditPqrsComponent } from '../pqrs/edit-pqrs/edit-pqrs.component';
import { UsuariosComponent } from '../usuarios/usuarios/usuarios.component';
import { CreateUsuarioComponent } from '../usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from '../usuarios/edit-usuario/edit-usuario.component';
import { VentanillasComponent } from '../ventanillas/ventanillas/ventanillas.component';
import { CreateVentanillaComponent } from '../ventanillas/create-ventanilla/create-ventanilla.component';
import { EditVentanillaComponent } from '../ventanillas/edit-ventanilla/edit-ventanilla.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: DefaultComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'citas',
        component: CitasComponent,
        data: {
          title: 'Citas'
        }
      },
      {
        path: 'create-cita',
        component: CreateCitaComponent,
        data: {
          title: 'Create Cita'
        }
      },
      {
        path: 'edit-cita/:id',
        component: EditCitaComponent,
        data: {
          title: 'Edit Cita'
        }
      },
      {
        path: 'clientes',
        component: ClientesComponent,
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'create-cliente',
        component: CreateClienteComponent,
        data: {
          title: 'Create Cliente'
        }
      },
      {
        path: 'edit-cliente/:id',
        component: EditClienteComponent,
        data: {
          title: 'Edit Cliente'
        }
      },
      {
        path: 'pqrs',
        component: PqrsComponent,
        data: {
          title: 'Pqrs'
        }
      },
      {
        path: 'create-pqrs',
        component: CreatePqrsComponent,
        data: {
          title: 'Create Pqrs'
        }
      },
      {
        path: 'edit-pqrs/:id',
        component: EditPqrsComponent,
        data: {
          title: 'Edit Pqrs'
        }
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          title: 'Usuarios'
        }
      },
      {
        path: 'create-usuario',
        component: CreateUsuarioComponent,
        data: {
          title: 'Create Usuario'
        }
      },
      {
        path: 'edit-usuario/:id',
        component: EditUsuarioComponent,
        data: {
          title: 'Edit Usuario'
        }
      },
      {
        path: 'ventanillas',
        component: VentanillasComponent,
        data: {
          title: 'Ventanillas'
        }
      },
      {
        path: 'create-ventanilla',
        component: CreateVentanillaComponent,
        data: {
          title: 'Create Ventanilla'
        }
      },
      {
        path: 'edit-ventanilla/:id',
        component: EditVentanillaComponent,
        data: {
          title: 'Edit Ventanilla'
        }
      },
      /*
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,
        data: {
          title: 'Digital Marketing'
        }
      },
      {
        path: 'human-resources',
        component: HumanResourcesComponent,
        data: {
          title: 'Human Resources'
        }
      },
      */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
