/**
 * @Description user归约器
 * @Copyright zhouzhi073859@outlook.com
 */

// import { User, } from '../models/user.model';
import * as UserAction from '../actions/user.action';

interface User {
  uid: string;
  username: string;
  logoUrl: string;
  isLogin: boolean;
}

export interface State {
  user: User;
}

export const initialState: State = {
  user: {
    uid: '72b0ec50-efc6-11e7-bb2d-1fcfea41469e',
    username: '上帝',
    logoUrl: '/data/img/userLogo/logoDefault.jpg',
    isLogin: true,
  },
};

export function  reducer(state = initialState, action: UserAction.Actions, ): State {
  switch (action.type) {
    case UserAction.Login: {
      const user = action.payload;
      state.user.uid = user.uid;
      state.user.username = user.username;
      state.user.logoUrl = user.logoUrl;
      state.user.isLogin = true;
    } break;
    
    default: {
      return state;
    }
  }
}

export const getUser = () => {
  return initialState.user;
};
