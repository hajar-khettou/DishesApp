import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(
      withJsonpSupport() 
    )
  ]
}).catch(err => console.error(err));