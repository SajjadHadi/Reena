import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Login, SignUp } from '../../interfaces/form';
import { User } from '../../interfaces/user';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get User': emptyProps(),
    'Get User Success': props<{ user: User }>(),
    'Get User Failure': props<{ error: string }>(),
    'Sign Up': props<{ user: SignUp }>(),
    'Sign Up Success': props<{ user: User }>(),
    'Sign Up Failure': props<{ error: string }>(),
    'Create Session': props<{ data: Login }>(),
    'Create Session Success': props<{ user: User }>(),
    'Create Session Failure': props<{ error: string }>(),
    'Logout': emptyProps(),
    'Logout Success': emptyProps(),
    'Logout Failure': props<{ error: string }>(),
  },
});
