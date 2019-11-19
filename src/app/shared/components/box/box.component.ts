import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { LoaderService } from '../../services/loader.service';
import { CacheService } from '../../services/cache.service';
import differenceInMinutes from 'date-fns/differenceInMinutes';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  public cityData: any = undefined;

  public showLoading = true;

  public lastSync: string;

  @Input() city: any;

  constructor(private weatherService: WeatherService,
              private cacheService: CacheService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.getLastSync();
    this.getCityData();

    this.loaderService.isShow().subscribe((show: boolean) => {
      this.showLoading = show;
    });

    setInterval(this.handleLastSync, 60000);
  }

  handleLastSync() {
    const today = new Date();
    const lastSync = new Date(this.lastSync);

    if (differenceInMinutes(today, lastSync) >= 10) {
      this.cacheService.clearCache(`${this.city.name}|${this.city.country}`);

      this.getCityData();
      this.getLastSync();
    }
  }

  getCityData() {
    this.weatherService.get(this.city.name, this.city.country)
                       .subscribe((cityData) => {
        this.cityData = cityData;
        this.showLoading = false;

        this.handleCache(cityData);
    }, (err) => {
        this.cityData = undefined;
        this.showLoading = false;
    });
  }

  showDetails(show: boolean) {
    if (this.cityData) {
      this.cityData.isActive = show;
    }
  }

  getLastSync() {
    this.lastSync = this.cacheService.getLastSync();
  }

  handleCache(cityData) {
    this.cacheService.setCache(`${cityData.name}|${cityData.sys.country}`, cityData);
  }

}
