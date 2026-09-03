import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DataApp } from './app/app';

bootstrapApplication(DataApp, appConfig).catch((err) => console.error(err));
