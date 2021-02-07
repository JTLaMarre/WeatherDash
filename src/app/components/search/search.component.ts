import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { TodaysweatherService } from '../../services/todaysweather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() setCity: EventEmitter<any> = new EventEmitter();
  @Output() setTemp: EventEmitter<any> = new EventEmitter();

  city:string;
  temp: number;
  weather:string;


  constructor(private service:TodaysweatherService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    const city = {
      city:this.city,
       }

    this.service.addCity(city).subscribe(data => {
      console.log(data)
      this.temp = data.main.temp;
      console.log(`temp:${this.temp}`);
      this.weather = data.weather[0].main;
      console.log(`${this.weather}`)

      this.setCity.emit(city);
      this.setTemp.emit(data.main.temp);

    })

  }


}
