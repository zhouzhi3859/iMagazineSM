/**
 * @Description reducer归约器
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { ActionReducerMap, createSelector, } from '@ngrx/store';

import * as userRdc from './user.reducer';
import * as appRdc from './app.reducer';

export interface State {
  user: userRdc.State;
  app: appRdc.State;
}

export const reducers: ActionReducerMap<State> = {
  user: userRdc.reducer,
  app: appRdc.reducers,
};
export const getUserState = (state: State, ) => state.user;
export const getUser = createSelector(getUserState, userRdc.getUser, );

export const getAppState = (state: State, ) => state.app;
export const getApp = createSelector(getAppState, appRdc.getApp, );
