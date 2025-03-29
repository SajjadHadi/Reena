import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { UserState } from './user/user.state';
import { UserEffects } from './user/user.effects';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
};

export const effects = [
  UserEffects
];
