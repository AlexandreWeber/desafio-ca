import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  @Input() data: any;
  @Input() lastSync: string;

  constructor() { }

  ngOnInit() {
  }
}
