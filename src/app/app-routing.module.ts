import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { QrscannerComponent } from './components/qrscanner/qrscanner.component';
import { RegisterEventComponent } from './components/register-event/register-event.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { LocateUsComponent } from './components/locate-us/locate-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesComponent, data: { animation: 'entitiesPage' } },
  { path: 'entity/:id', component: EntityDetailComponent, data: { animation: 'entityPage' } },
  { path: 'qrcode/:url', component: QrcodeComponent, data: { animation: 'qrcodePage' } },
  { path: 'qrcode', redirectTo: '/entities' },
  { path: 'contact', component: ContactUsComponent, data: { animation: 'contactPage' } },
  { path: 'events', component: EventsComponent, data: { animation: 'eventPage' } },
  { path: 'event/:id', component: EventDetailsComponent, data: { animation: 'eventDetailsPage' } },
  { path: 'scanner', component: QrscannerComponent, data: { animation: 'scannerPage' } },
  { path: 'scanner/:id/:title', component: QrscannerComponent, data: { animation: 'scannerPage' } },
  { path: 'register/:id', component: RegisterEventComponent, data: { animation: 'registerPage' } },
  { path: 'success/:id', component: RegisterSuccessComponent, data: { animation: 'registerSuccessPage' } },
  { path: 'locate', component: LocateUsComponent, data: { animation: 'locatePage' } },
  { path: '**', redirectTo: '/entities' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
