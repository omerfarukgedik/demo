import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/Feed';
import { MenuLink } from 'src/app/models/MenuLink';
import { GetFeedService } from './services/get-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-kerzz';
  menuLinks: MenuLink[];
  feeds: Feed[];
  isLoading: Boolean = false;
  isError: null;
  page: {
    limit: 0,
    skip: 0,
    latitude: 0,
    longitude: 0
  }

  constructor(private getFeedService: GetFeedService) {
    this.isLoading = true;
    this.getFeedService.getFeed(10).subscribe(data => {
      this.feeds = data.response;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      this.isError = err;
      console.error(err)
    })
  }

  goNextPage(limit: Number, skip: Number, latitude: Number, longitude: Number, service: GetFeedService) {

  }


  ngOnInit(): void {
    this.menuLinks = [
      {
        name: 'Anasayfa',
        url: '/',
        icon: 'home'
      },
      {
        name: 'Restaurants',
        url: '#',
        icon: 'restaurant'
      }
    ]
  }
}