import { Component, OnInit } from '@angular/core';
import { TodaysweatherService } from '../../services/todaysweather.service';
@Component({
  selector: 'app-weatherdisplay',
  templateUrl: './weatherdisplay.component.html',
  styleUrls: ['./weatherdisplay.component.css']
})
export class WeatherdisplayComponent implements OnInit {

  public get weather():string{
    return this.service.weather;
  }
  constructor(private service:TodaysweatherService) { }

  ngOnInit(): void {
  }

}
