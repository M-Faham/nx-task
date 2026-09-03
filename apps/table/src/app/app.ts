import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTable, TableColumn } from '@nx-task/ui-table';
import { USERS_DATA } from './data/users';
import { User } from './user.model';

@Component({
  imports: [RouterModule, DataTable],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class TableApp {
  protected readonly rows = USERS_DATA;

  protected readonly columns: TableColumn<User>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department' },
    { key: 'status', label: 'Status', badge: true },
  ];
}
