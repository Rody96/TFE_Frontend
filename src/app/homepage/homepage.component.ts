import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../services/temperature.service';
import {HumidityService} from '../services/humidity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  //tempId: any = 5;
  measurements: any[];
  homepageSubscription: Subscription;
  
  constructor(private humidityService: HumidityService) { }

  ngOnInit() {

  }


}
