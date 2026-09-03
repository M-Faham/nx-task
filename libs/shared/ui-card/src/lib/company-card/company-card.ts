import { Component, computed, input } from '@angular/core';
import { Company } from './company-card.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'lib-company-card',
  imports: [TitleCasePipe],
  templateUrl: './company-card.html',
  styleUrl: './company-card.css',
})
export class CompanyCard {
  company = input.required<Company>();

  companyCardData = computed(() =>
    Object.entries(this.company())
      .filter(([label]) => label !== 'mission' && label !== 'aboutUs')
      .map(([label, value]) => ({ label, value }))
  );
}
