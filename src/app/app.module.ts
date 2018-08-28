import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './about/team/team.component';
import { PrinciplesComponent } from './about/principles/principles.component';

import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DriversComponent } from './drivers/drivers.component';
import { FaqComponent } from './drivers/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrinciplesComponent,
    ClientsComponent,
    ContactComponent,
    ServicesComponent,
    DriversComponent,
    TeamComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
