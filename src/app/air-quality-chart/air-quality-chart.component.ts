import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.scss']
})
export class AirQualityChartComponent implements OnInit {

  measurements = [
    {
      "name": "Air Quality",
      "series":[
  
      ]
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
    xAxisLabel: string = 'Time';
    yAxisLabel: string = 'Air Quality (PPM)';
    timeline: boolean = true;

    colorScheme = {
      domain: ['#5AA454']
    };
  
    constructor(private httpClient: HttpClient) {

      for(let i=1;i<60;i++){
        this.httpClient.get('https://rodrigue-projects.site/airquality/'+i).subscribe(
          (res) => {
            this.measurements[0].series.push(
                {
                "name" : res["createdAt"], 
                "value": res["ppm"]
                }
            )
            this.measurements[0].series.sort(function(a,b){
              return new Date(a.name).valueOf() - new Date(b.name).valueOf();
            });
            this.measurements = [...this.measurements];
          },
          (error) => { console.log(error);}
          );
        }
        console.log(this.measurements)
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
