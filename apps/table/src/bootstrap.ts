import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TableApp } from './app/app';

bootstrapApplication(TableApp, appConfig).catch((err) => console.error(err));
