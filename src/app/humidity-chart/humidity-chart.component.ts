import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {HumidityService} from '../services/humidity.service';
import { HttpClient } from '@angular/common/http';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss']
})
export class HumidityChartComponent implements OnInit {

  @ViewChild("humidityChart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  measurements = [];
  dates = []
  homepageSubscription: Subscription;

  constructor(private httpClient: HttpClient) {
    for(let i=1;i<60;i++){
    this.httpClient.get('https://rodrigue-projects.site/humidity/'+i).subscribe(
      (res) => {
        this.measurements.push(
            {
            x : res["createdAt"], 
            y: res["airHumidity"]
            }
        )
      },
      (error) => { console.log(error);}
      );
    }
    this.chartOptions = {
      series: [
        {
          name: "humidity",
          data: this.measurements
        }
      ],
      chart: {
        height: 450,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Humidity",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.dates
      }
    };
    console.log(this.dates)
  }

  ngOnInit(): void {
   
  }
}
