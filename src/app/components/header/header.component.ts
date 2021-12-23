import { Component, Input, OnInit } from '@angular/core';
import { MenuLink } from 'src/app/models/MenuLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('menu') menu: MenuLink[];

  ngOnInit(): void {
  }
}
