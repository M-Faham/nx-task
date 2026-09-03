import { Component } from '@angular/core';
import { StatsComponent } from './components/stats/stats.component';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';
import { AppCard } from './home.model';
import { APPS } from './data/apps';

@Component({
  selector: 'app-home',
  imports: [StatsComponent, DataCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly userName = 'John';
  protected readonly apps: AppCard[] = APPS;
}
