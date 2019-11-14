import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherBoxComponent } from './shared/components/box/box.component';
import { WeatherService } from './shared/services/weather.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './shared/services/request-interceptor.service';
import { LoaderService } from './shared/services/loader.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LogoComponent } from './shared/components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherBoxComponent,
    LoadingComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
