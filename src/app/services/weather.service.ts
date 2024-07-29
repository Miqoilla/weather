// weather.service.ts

export interface WeatherData {
  main: {
    temp: number;
  };
  name: string;
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'your_api_news_ke'; // Ganti dengan API key Anda
  city = 'Yogyakarta';

  constructor(private http: HttpClient) { }

  getData(): Observable<WeatherData> { // Gunakan antarmuka WeatherData
    return this.http.get<WeatherData>(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }

  getForecast(): Observable<any> {
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
