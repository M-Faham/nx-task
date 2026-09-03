import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-card',
  imports: [RouterLink],
  templateUrl: './data-card.component.html',
})
export class DataCardComponent {
  name = input.required<string>();
  sub = input<string>('');
  description = input<string>('');
  path = input.required<string>();
  imgUrl = input.required<string>();
  bg = input<string>('bg-blue-50');
  iconBg = input<string>('bg-blue-600');
  buttonBg = input<string>('bg-blue-700 hover:bg-blue-800');
}
