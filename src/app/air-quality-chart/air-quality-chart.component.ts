import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AirQualityChartComponent implements OnInit {

  results: any[] = [];
  measurements = [
    {
      "name": "Air Quality",
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
    yAxisLabel: string = 'Concentration CO₂ (PPM)';
    timeline: boolean = true;

    colorScheme = {
      domain: ['#006400']
    };
  
    constructor(private httpClient: HttpClient) {

      this.httpClient.get('https://rodrigue-projects.site/airquality/all').subscribe(
          (res) => {
            this.results.push(res);
             for(let i=0; i < this.results[0].length;i++){
              this.measurements[0].series.push(
                {
                "name" : new Date(this.results[0][i]["createdAt"]), 
                "value": this.results[0][i]["ppm"]
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
  
  
  ngOnInit(): void {
  }

}
