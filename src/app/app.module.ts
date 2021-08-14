import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { SignupComponent } from './authComponents/signup/signup.component';
import { SigninComponent } from './authComponents/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'home', component: HomepageComponent, canActivate : [AuthGuardService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TempChartComponent,
    HumidityChartComponent,
    AirQualityChartComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
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
  providers: [TemperatureService, HumidityService, AuthService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
