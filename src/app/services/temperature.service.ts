import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TemperatureService {
  measurementsSubject = new Subject<any[]>();

  private measurements = [];

  constructor(private httpClient: HttpClient) { }

  emitMeasurementsSubject() {
    this.measurementsSubject.next(this.measurements.slice());
  }

  getTemperature(tempId: any){
    this.httpClient.get<any[]>('https://rodrigue-projects.site/temperature/'+ tempId)
    .subscribe(
      (response) => {
        this.measurements = response;
        this.emitMeasurementsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getTempValues(){
    for(let i=4; i < 14; i++){

      this.httpClient.get<any[]>('https://rodrigue-projects.site/temperature/'+ i)
    .subscribe(
      (response) => {
        //console.log(response)
        this.measurements.push(response['temperature']);
        this.emitMeasurementsSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    }
    
  }

  saveMeasurement(){
    this.httpClient
      .put('https://angular-project-a3431-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.measurements)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


}