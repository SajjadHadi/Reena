import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './store/user/user.actions';

export function initializeApp() {
  const store = inject(Store);
  store.dispatch(UserActions.getUser());
}
