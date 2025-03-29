import { ApplicationConfig, isDevMode, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ReenaPreset } from '../theme';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { effects, reducers } from './store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { initializeApp } from './app.initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: ReenaPreset,
        options: {
          darkModeSelector: 'none'
        }
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers),
    provideEffects(effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAppInitializer(initializeApp),
  ]
};
