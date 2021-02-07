import { Component, OnInit } from '@angular/core';
import { TodaysweatherService } from '../../services/todaysweather.service';

@Component({
  selector: 'app-tempdisplay',
  templateUrl: './tempdisplay.component.html',
  styleUrls: ['./tempdisplay.component.css']
})
export class TempdisplayComponent implements OnInit {

  temp: number=0;

  constructor(private service:TodaysweatherService) { }

  ngOnInit(): void {

  }

  getTemp(){
    this.service.getTemp().subscribe(data =>{
      console.log(data)
    })
  }

}
