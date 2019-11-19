import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BoxComponent } from './shared/components/box/box.component';
import { WeatherService } from './shared/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './shared/services/loader.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { Interceptor } from './interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BoxComponent,
    LoadingComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    Interceptor,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    WeatherService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
