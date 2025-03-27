import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ReenaPreset } from '../theme';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: ReenaPreset,
        options: {
          darkModeSelector: 'none'
        }
      }
    }), provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
