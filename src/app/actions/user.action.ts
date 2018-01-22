/**
 * @Description user行为相关
 * @Copyright zhouzhi073859@outlook.com
 */

import { Action, } from '@ngrx/store';

interface User {
  uid: string;
  username: string;
  logoUrl: string;
  isLogin: boolean;
}

export const Login = 'Login';

export class LoginAction implements Action {
  constructor(public payload: User, ) {}
  public readonly type = Login;
}

export type Actions = LoginAction;

