import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { HttpServiceService } from './service/http-service.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule
  ],
  providers:[
    HttpServiceService
  ]
})
export class PublicModule { }
