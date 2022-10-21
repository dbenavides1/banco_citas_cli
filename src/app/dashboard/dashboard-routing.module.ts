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
import { DeleteCitaComponent } from '../citas/delete-cita/delete-cita.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default'
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
        path: 'delete-cita/:id',
        component: DeleteCitaComponent,
        data: {
          title: 'Delete Cita'
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
