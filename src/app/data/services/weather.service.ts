import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import IForecastWeather from '../interfaces/responseWeather.interface'
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient)
  private baseApiUrl = environment.baseWeatherApiUrl

  getForecastWeather(city: string) {
    return this.http.get<IForecastWeather>(`${this.baseApiUrl}forecast.json`, {
      params: {
        q: city,
        days: 3
      }
    })
  }
}
