import { Component } from '@angular/core';
import { StatsCardComponent } from '../../../../shared/components/stats-card/stats-card.component';
import { Stat } from './stats.model';
import { STATS } from './data/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  imports: [StatsCardComponent],
})
export class StatsComponent {
  protected readonly stats: Stat[] = STATS;
}
