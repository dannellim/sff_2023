import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrscannerComponent } from './components/qrscanner/qrscanner.component';
import { RegisterEventComponent } from './components/register-event/register-event.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { LocateUsComponent } from './components/locate-us/locate-us.component';
import { CalendarControlComponent } from './controls/calendar-control/calendar-control.component';
import { PdpaTextControlComponent } from './controls/pdpa-text-control/pdpa-text-control.component';
import { AgendalistCardviewComponent } from './controls/agendalist-cardview/agendalist-cardview.component';
import { SpeakerControlComponent } from './controls/speaker-control/speaker-control.component';

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    EntitiesComponent,
    EntityDetailComponent,
    QrcodeComponent,
    ContactUsComponent,
    SpinnerComponent,
    EventsComponent,
    EventDetailsComponent,
    QrscannerComponent,
    RegisterEventComponent,
    RegisterSuccessComponent,
    LocateUsComponent,
    CalendarControlComponent,
    PdpaTextControlComponent,
    AgendalistCardviewComponent,
    SpeakerControlComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
