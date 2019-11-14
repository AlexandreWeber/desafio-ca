import { Component, OnInit, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherService } from '../shared/services/weather.service';
import { LoaderService } from '../shared/services/loader.service';
import { CacheService } from '../shared/services/cache.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherList = [];

  showLoading: boolean = true;

  lastSync: string;

  constructor(private weatherService: WeatherService,
              private loaderService: LoaderService,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.getWeathers();

    setInterval(() => {
      this.getWeathers();
    }, 600000);
  }

  getWeathers() {
    this.cacheService.clearCache();
    forkJoin(
      this.weatherService.get('Nuuk', 'GL'),
      this.weatherService.get('Urubici', 'BR'),
      this.weatherService.get('Nairobi', 'KE'),
    ).subscribe((response) => {
      this.weatherList = [...response];

      this.handleCache();
    });

    this.loaderService.isShow()
                      .subscribe((showLoading: boolean) => {
      this.showLoading = showLoading;
    });
  }

  changeActive(id: number) {
    this.weatherList.map((weather) => {
      weather.isActive = weather.id === id;
    })
  }

  handleCache() {
    this.cacheService.setCache(this.weatherList);
    this.lastSync = this.cacheService.getLastSync();
  }
}
