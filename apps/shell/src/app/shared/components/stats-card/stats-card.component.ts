import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
})
export class StatsCardComponent {
  imgUrl = input.required<string>();
  title = input.required<string>();
  number = input.required<number>();
  iconBg = input<string>('bg-blue-500');
}
