import { Component, OnInit } from '@angular/core';
import { MenuLink } from 'src/models/MenuLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'demo-kerzz';
  menuLinks: MenuLink[];
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