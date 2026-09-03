// The table compoent itself is AI Generated as there was an issue with @simens/ngx-datatable and MFE
// and I was running out of time to fix it.

import { Component, computed, input, signal } from '@angular/core';
import { TableColumn } from './data-table.model';

@Component({
  selector: 'lib-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable<T extends { id: number }> {
  columns = input.required<TableColumn<T>[]>();
  rows = input.required<T[]>();
  pageSize = input(5);

  protected readonly page = signal(1);

  protected readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.rows().length / this.pageSize()))
  );

  protected readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  protected readonly pagedRows = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.rows().slice(start, start + this.pageSize());
  });

  protected readonly rangeEnd = computed(() =>
    Math.min(this.page() * this.pageSize(), this.rows().length)
  );

  protected setPage(page: number): void {
    this.page.set(page);
  }

  protected badgeClass(value: unknown): string {
    return value === 'Active'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700';
  }
}
