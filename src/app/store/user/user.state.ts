import { User } from '../../interfaces/user';

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  user: null,
  loading: false,
  error: null,
};
