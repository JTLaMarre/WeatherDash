import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodaysweatherService {
city:string;
temp:number;
weather:string;
openUrlOne:string = `https://api.openweathermap.org/data/2.5/weather?q=`
openUrlTwo:string=`&appid=63e2ab79c455ba5a3ee05762c641f525`

constructor(private http:HttpClient) { }

addCity(city:any){

  this.city=city.city
  let res:any = this.http.get<any>(`${this.openUrlOne}${this.city}${this.openUrlTwo}`);

  console.log(res)
  return res;

}

getTemp(){
return  this.http.get<any>(`${this.openUrlOne}${this.city}${this.openUrlTwo}`);
}

setCity(city:any){
  this.city=city.city;
  console.log(`city:${this.city}`)
  }
setTemp(temp:number){
  this.temp=temp;
  console.log(`temp:${this.temp}`)
  }
setWeather(weather:string){
  this.weather = weather;
  console.log(`weather:${this.weather}`)
}
}
