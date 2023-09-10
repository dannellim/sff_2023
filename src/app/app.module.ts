import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    EntitiesComponent,
    EntityDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
