import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CacheService } from './cache.service';

@Injectable()
export class WeatherService {

  private readonly url = environment.baseUrl;

  constructor(private http: HttpClient,
              private cache: CacheService) { }

  get(city: string, country: string): Observable<any> {
    const weather = this.cache.getCache(city, country);

    if (weather) {
      return of(weather);
    }

    return this.http.get(`${this.url}?q=${city},${country}&units=metric`);
  }
}
