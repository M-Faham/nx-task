import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class NavItemComponent {
  item = input.required<NavItem>();
}
