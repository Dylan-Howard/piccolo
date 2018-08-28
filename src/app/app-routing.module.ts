import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { PrinciplesComponent } from './about/principles/principles.component';
import { TeamComponent } from './about/team/team.component';

// import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { DriversComponent } from './drivers/drivers.component';
import { FaqComponent } from './drivers/faq/faq.component';

import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/principles', component: PrinciplesComponent },
  { path: 'about/team', component: TeamComponent },

  { path: 'contact', component: ContactComponent },
  // { path: 'clients', component: ClientsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'drivers/faq', component: FaqComponent },

  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
