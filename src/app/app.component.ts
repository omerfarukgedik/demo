import { Component, HostListener, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/Feed';
import { MenuLink } from 'src/app/models/MenuLink';
import { GetFeedService } from './services/get-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'demo-kerzz';
  isMenuOpen: Boolean = false;
  menuLinks: MenuLink[] = [];
  feeds: Feed[] = [];
  isLoading: Boolean = false;
  isError: any = null;
  page: Object = {
    limit: 10,
    skip: 0,
    latitude: 0,
    longitude: 0
  }

  constructor(private getFeedService: GetFeedService) { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    //console.log($event.path[1]);
    //console.log("scrolling");
  }

  clickMenu(isOpen: Boolean) {
    this.isMenuOpen = isOpen;
  }

  getFeed(page) {
    this.isLoading = true;
    this.getFeedService.getFeed(page.limit, page.skip, page.latitude, page.longitude).subscribe(data => {
      this.feeds = data;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      this.isError = err;
      console.error(err)
    })
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(data => {
      this.page = {
        ...this.page,
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      }
    })
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

    this.getLocation()
    this.getFeed(this.page)
  }
}