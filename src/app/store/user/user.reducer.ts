import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.getUser, state => ({ ...state, loading: true, error: null })),
  on(UserActions.getUserSuccess, (state, { user }) => ({ ...state, user, loading: false, error: null })),
  on(UserActions.getUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserActions.signUp, state => ({ ...state, loading: true, error: null })),
  on(UserActions.signUpSuccess, (state, { user }) => ({ ...state, user, loading: false, error: null })),
  on(UserActions.signUpFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserActions.createSession, state => ({ ...state, loading: true, error: null })),
  on(UserActions.createSessionSuccess, (state, { user }) => ({ ...state, user, loading: false, error: null })),
  on(UserActions.createSessionFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserActions.logout, state => ({ ...state, loading: true, error: null })),
  on(UserActions.logoutSuccess, state => ({ ...state, user: null, loading: false, error: null })),
  on(UserActions.logoutFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
