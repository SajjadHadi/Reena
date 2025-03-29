import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';
import { mergeMap } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(() =>
        this.userService.getUser().then(
          (user: User) => UserActions.getUserSuccess({ user }),
          (error) => UserActions.getUserFailure({ error: error.message })
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signUp),
      mergeMap(({ user }) =>
        this.userService.signup(user).then(
          (user: User) => UserActions.signUpSuccess({ user }),
          (error) => UserActions.signUpFailure({ error: error.message })
        )
      )
    )
  );

  createSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createSession),
      mergeMap(({ data }) =>
        this.userService.createSession(data).then(
          (user: User) => UserActions.createSessionSuccess({ user }),
          (error) => UserActions.createSessionFailure({ error: error.message })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logout),
      mergeMap(() =>
        this.userService.logout().then(
          () => UserActions.logoutSuccess(),
          (error) => UserActions.logoutFailure({ error: error.message })
        )
      )
    )
  );
}
