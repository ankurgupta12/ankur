import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    {
      provide: "BASE_API_URL", useValue: environment.apiUrl
    }

  ]
};
export const BASE_API_URL = new InjectionToken('BASE_API_URL',{providedIn:'root',factory:()=>{
  return environment.apiUrl

}});
