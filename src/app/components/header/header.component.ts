import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuLink } from 'src/app/models/MenuLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('menu') menu: MenuLink[];
  @Output('clickMenu') clickMenu = new EventEmitter<any>();

  ngOnInit(): void {
  }
}
