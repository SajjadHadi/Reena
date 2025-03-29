import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/user';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  // Get the current user
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(() =>
        from(this.userService.getUser()).pipe(
          map((user: User) => UserActions.getUserSuccess({ user })),
          catchError((error) => of(UserActions.getUserFailure({ error: error.message })))
        )
      )
    )
  );

  // Sign up a new user
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signUp),
      mergeMap(({ user }) =>
        from(this.userService.signup(user)).pipe(
          map((user: User) => UserActions.signUpSuccess({ user })),
          catchError((error) => of(UserActions.signUpFailure({ error: error.message })))
        )
      )
    )
  );

  // Create a session (login)
  createSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createSession),
      mergeMap(({ data }) =>
        from(this.userService.createSession(data)).pipe(
          map((user: User) => UserActions.createSessionSuccess({ user })),
          catchError((error) => of(UserActions.createSessionFailure({ error: error.message })))
        )
      )
    )
  );

  // Logout the user
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logout),
      mergeMap(() =>
        from(this.userService.logout()).pipe(
          map(() => UserActions.logoutSuccess()),
          catchError((error) => of(UserActions.logoutFailure({ error: error.message })))
        )
      )
    )
  );

  // Navigate to dashboard after successful sign-up
  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.signUpSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  // Navigate to dashboard after successful login
  createSessionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.createSessionSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  // Navigate to login page after successful logout
  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logoutSuccess),
        tap(() => this.router.navigate(['/login']))
      ),
    { dispatch: false }
  );

  // Display toast notifications for errors
  handleErrors$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.getUserFailure,
          UserActions.signUpFailure,
          UserActions.createSessionFailure,
          UserActions.logoutFailure
        ),
        tap((action) =>
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: action.error,
          })
        )
      ),
    { dispatch: false }
  );
}
