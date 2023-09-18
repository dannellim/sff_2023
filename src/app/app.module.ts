import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    EntitiesComponent,
    EntityDetailComponent,
    QrcodeComponent,
    ContactUsComponent,
    SpinnerComponent,
    EventsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
