import { Component, Input, OnInit } from '@angular/core';
import { Feed, GeoLocationObject } from 'src/app/models/Feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input('feed') feed: Feed;

  constructor() { }

  ngOnInit(): void {
  }

  getLocationKm(source: GeoLocationObject, target: GeoLocationObject) {
    let R = 6371;
    let latitudeDistance = this.radian(target.latitude - source.latitude);
    let longitudeDistance = this.radian(target.longitude - source.longitude);
    let sourceLatitude = this.radian(source.latitude);
    let targetLatitude = this.radian(target.latitude);

    let a =
      Math.sin(latitudeDistance / 2) * Math.sin(latitudeDistance / 2) +
      Math.sin(longitudeDistance / 2) *
      Math.sin(longitudeDistance / 2) *
      Math.cos(sourceLatitude) *
      Math.cos(targetLatitude);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  }

  radian(value: number) {
    return (value * Math.PI) / 100;
  }

  getImg() {
    return this.feed.images[0]?.base64 || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rh8bvCKO9YGbR0LtWFS_K8Xaeul9is5gtw&usqp=CAU'
  }

}
