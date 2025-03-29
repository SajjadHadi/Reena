import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { selectUser, selectUserLoading } from '../store/user/user.selectors';
import { combineLatest } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  // Determine the mode from route data (default to 'authenticated')
  const mode = route.data?.['authMode'] || 'authenticated';
  const redirectTo = mode === 'authenticated' ? '/login' : '/user-dashboard';

  return combineLatest([
    store.select(selectUser),
    store.select(selectUserLoading),
  ]).pipe(
    filter(([_, loading]) => !loading),
    take(1),
    map(([user, _]) => {
      if (mode === 'authenticated') {
        // Protect routes that require authentication (e.g., /user-dashboard)
        if (user) {
          return true;
        } else {
          return router.createUrlTree([redirectTo], { queryParams: { returnUrl: state.url } });
        }
      } else {
        // Protect routes that require no authentication (e.g., /login, /sign-up)
        if (!user) {
          return true;
        } else {
          return router.createUrlTree([redirectTo]);
        }
      }
    })
  );
};
