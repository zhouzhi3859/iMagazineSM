/**
 * @Description app还原器
 * @Copyright zhouzhi073859@outlook.com
 */

import * as AppActions from '../actions/app.action';

interface App {
  url: string;
}

export interface State {
  app: App;
}

export const initialState: State = {
  app: {
    url: '',
  },
};

export function reducers(state = initialState, action: AppActions.Actions, ): State {
  switch (action.type) {
    case AppActions.SetUrl: {
      const payload = action.payload;
      state.app.url = payload.url;
    } break;
    
    default: {
      return state;
    }
  }
}

export const getApp = () => {
  return initialState.app;
};
