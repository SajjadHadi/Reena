import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './store/user/user.actions';
import { selectUser } from './store/user/user.selectors';

export function initializeApp() {
  const store = inject(Store);
  store.dispatch(UserActions.getUser());
  store.select(selectUser).subscribe(user => {
    console.log("INITIALIZE APP", user)
  })
}
