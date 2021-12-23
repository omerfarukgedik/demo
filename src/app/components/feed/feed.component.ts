import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/Feed';

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

}
