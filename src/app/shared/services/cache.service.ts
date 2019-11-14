import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CacheService {

  private readonly cacheKey = 'weatherList';
  private readonly lastSync = 'lastSync';

  constructor() { }

  setCache(weatherList) {
    window.localStorage.setItem(this.cacheKey, JSON.stringify(weatherList));
    window.localStorage.setItem(this.lastSync, new Date().toString());
  }

  clearCache() {
    window.localStorage.setItem(this.cacheKey, '');
  }

  getCache(city: string, country: string) {
    const weatherLocal = window.localStorage.getItem(this.cacheKey);
    const weatherJson = weatherLocal ? JSON.parse(weatherLocal) : [];

    return weatherJson.find((weather) => weather.name === city &&
                                         weather.sys.country === country);
  }

  getLastSync() {
    return window.localStorage.getItem(this.lastSync);
  }
}
