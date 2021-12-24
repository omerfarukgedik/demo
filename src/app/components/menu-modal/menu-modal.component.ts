import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuLink } from 'src/app/models/MenuLink';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent {
  @Input('menu') menu: MenuLink[];
  @Input('isOpen') isOpen: boolean;
  @Output('clickMenu') clickMenu = new EventEmitter<any>();

}
