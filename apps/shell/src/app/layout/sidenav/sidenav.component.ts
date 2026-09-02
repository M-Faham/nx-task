import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from './components/nav-item/nav-item.model';
import { NavItemComponent } from "./components/nav-item/nav-item.component";
import { NAV_ITEMS } from './data/nav-items';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [NavItemComponent],
})
export class SidenavComponent {
  protected readonly navItems: NavItem[] = NAV_ITEMS;
}
