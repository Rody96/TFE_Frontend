import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HumidityService {
  measurementsSubject = new Subject<any[]>();

  private humidityMeasurements = [];

  constructor(private httpClient: HttpClient) { }

  emitMeasurementsSubject() {
    this.measurementsSubject.next(this.humidityMeasurements.slice());
  }


  getHumValues(){
    for(let i=1; i < 4; i++){

      this.httpClient.get<any[]>('https://rodrigue-projects.site/humidity/'+ i)
    .subscribe(
      (response) => {
        //console.log(response)
        this.humidityMeasurements.push(response['airHumidity']);
        this.emitMeasurementsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    }
    
  }

}