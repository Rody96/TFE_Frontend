import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {HumidityService} from '../services/humidity.service';
import { HttpClient } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HumidityChartComponent implements OnInit {

  results: any[] = [];
  measurements = [
    {
      "name": "Humidity",
      "series":[]
    }
  ];
  view: any[] = [1000, 500];

    // options
    legend: boolean = false;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Temps';
    yAxisLabel: string = 'Humidité (%)';
    timeline: boolean = true;

    colorScheme = {
      domain: ['#00008B']
    };
  
    constructor(private httpClient: HttpClient) {

      
        this.httpClient.get('https://rodrigue-projects.site/humidity/all').subscribe(
          (res) => {
            this.results.push(res);
             for(let i=0; i < this.results[0].length;i++){
              this.measurements[0].series.push(
                {
                "name" : new Date(this.results[0][i]["createdAt"]), 
                "value": this.results[0][i]["airHumidity"]
               }
              )
            }
            this.measurements[0].series.sort(function(a,b){
              return new Date(a.name).valueOf() - new Date(b.name).valueOf();
            });
            this.measurements = [...this.measurements]; 
            
          },
          (error) => { console.log(error);}
          );
            
       //console.log(this.measurements)
      Object.assign( this, this.measurements );
    }
  
    onSelect(data): void {
      //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
  
    onActivate(data): void {
      //console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
  
    onDeactivate(data): void {
      //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

  ngOnInit(): void {
   
  }
}
