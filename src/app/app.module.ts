import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';;
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemperatureService } from './services/temperature.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TempChartComponent } from './temp-chart/temp-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';
import { AirQualityChartComponent } from './air-quality-chart/air-quality-chart.component';
import { HumidityService } from './services/humidity.service';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TempChartComponent,
    HumidityChartComponent,
    AirQualityChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TemperatureService, HumidityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
