/**
 * @Description reducer归约器
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { ActionReducerMap, createSelector, } from '@ngrx/store';
// import { compose, } from '@ngrx/core/compose';

import * as userRdc from './user.reducer';

export interface State {
  user: userRdc.State;
}

export const reducers: ActionReducerMap<State> = {
  user: userRdc.reducer,
};
export const getUserState = (state: State, ) => state.user;
export const getUser = createSelector(getUserState, userRdc.getUser, );

