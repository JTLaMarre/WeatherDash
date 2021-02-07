import { Component, OnInit } from '@angular/core';
import { TodaysweatherService } from '../../services/todaysweather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

 temp:number;

  constructor(private service:TodaysweatherService) { }

  ngOnInit(): void {
  }

  setCity(city:any){

    this.service.setCity(city);
  }
  setTemp(temp:number){
    this.service.setTemp(temp);
  }

  setWeather(weather:string){
    this.service.setWeather(weather);
  }


}
