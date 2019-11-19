import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }

}
