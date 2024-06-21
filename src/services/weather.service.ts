import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpsClientService: HttpClient) { }

  fetchData(cityName: string){
    return this.httpsClientService.get(
      `${URL}${cityName}&appid=${environment.API_KEY}&units=metric`
    )
  }
}
