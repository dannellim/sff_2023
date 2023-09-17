import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    EntitiesComponent,
    EntityDetailComponent,
    QrcodeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
