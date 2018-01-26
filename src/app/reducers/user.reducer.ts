/**
 * @Description user还原器
 * @Copyright zhouzhi073859@outlook.com
 */

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
    uid: '',
    username: '',
    logoUrl: '',
    isLogin: false,
  },
};

export function reducer(state = initialState, action: UserAction.Actions, ): State {
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
