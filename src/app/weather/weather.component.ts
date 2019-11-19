import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader.service';
import { CacheService } from '../shared/services/cache.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities = [
    {
      name: 'Nuuk',
      country: 'GL'
    },
    {
      name: 'Urubici',
      country: 'BR'
    },
    {
      name: 'Nairobi',
      country: 'KE'
    }
  ];

  constructor(private loaderService: LoaderService,
              private cacheService: CacheService) { }

  ngOnInit() { }

}
