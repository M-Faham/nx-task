import { Component, signal } from '@angular/core';
import { CompanyCard } from '@nx-task/ui-card';
import { Company } from '@nx-task/models';

@Component({
  imports: [CompanyCard],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class DataApp {
  protected companyData = signal<Company>({
    name: 'Acme Corporation',
    industry: 'Manufacturing',
    hq: 'New York, NY',
    founded: 1990,
    employees: 500,
    website: 'https://www.acme.com',
    aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Donec euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.',
    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Donec euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.'
  });
}
