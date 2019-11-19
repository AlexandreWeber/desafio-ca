import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CacheService {

  private readonly lastSync = 'lastSync';

  constructor() { }

  setCache(key: string, weather: any) {
    window.localStorage.setItem(key, JSON.stringify(weather));
  }

  setLastSync() {
    window.localStorage.setItem(this.lastSync, new Date().toString());
  }

  clearCache(key: string) {
    window.localStorage.setItem(key, undefined);
  }

  getCache(key: string) {
    const weatherLocal = window.localStorage.getItem(key);
    const weatherJson = weatherLocal && weatherLocal !== 'undefined'
                        ? JSON.parse(weatherLocal)
                        : undefined;

    return weatherJson;
  }

  getLastSync() {
    return window.localStorage.getItem(this.lastSync);
  }
}
