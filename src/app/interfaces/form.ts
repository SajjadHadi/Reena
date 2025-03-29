export interface BaseAuth {
  email: string;
  password: string;
}

export interface Login extends BaseAuth {
}

export interface SignUp extends BaseAuth {
  fullName: string;
}
