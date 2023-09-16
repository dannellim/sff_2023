import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/entities', pathMatch: 'full' },
  { path: 'entities', component: EntitiesComponent, data: { animation: 'entitiesPage' } },
  { path: 'entity/:id', component: EntityDetailComponent, data: { animation: 'entityPage' } },
  { path: 'qrcode/:url', component: QrcodeComponent, data: { animation: 'qrcodePage' } },
  { path: 'qrcode', redirectTo: '/entities' },
  { path: 'contact', component: ContactUsComponent, data: { animation: 'contactPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
