import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withJsonpSupport()),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));