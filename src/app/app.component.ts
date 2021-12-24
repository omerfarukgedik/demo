import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Feed } from 'src/app/models/Feed';
import { MenuLink } from 'src/app/models/MenuLink';
import { GetFeedService } from './services/get-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastFeed', { read: ElementRef })
  theLastFeed: QueryList<ElementRef>;
  title: string = 'demo-kerzz';
  observer: any;
  isMenuOpen: boolean = false;
  menuLinks: MenuLink[] = [];
  feeds: Feed[] = [];
  isLoading: boolean = false;
  isNextLoading: boolean = false;
  isError: any = null;
  latitude: number = 0;
  longitude: number = 0;
  limit: number = 10;
  skip: number = 0;
  searchText: string = '';

  constructor(private getFeedService: GetFeedService) { }

  clickMenu(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }

  search(text: string = '') {
    this.searchText = text;
  }

  getFeed(limit: number, skip: number, isNextPage: boolean = false) {
    if (isNextPage) this.isNextLoading = true
    else this.isLoading = true;

    this.getFeedService.getFeed(limit, skip, this.latitude, this.longitude).subscribe(data => {
      this.feeds = [...this.feeds, ...data.response];
      this.isLoading = false;
      this.isNextLoading = false;
    }, err => {
      this.isLoading = false;
      this.isNextLoading = false;
      this.isError = err;
      console.error(err)
    })
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(data => {
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
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
    this.getFeed(this.limit, 0)
    this.intersectionObserver()
  }

  ngAfterViewInit(): void {
    this.theLastFeed.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement)
    })
  }

  intersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.getFeed(10, this.skip + 10, true)
      }
    }, options)
  }
}