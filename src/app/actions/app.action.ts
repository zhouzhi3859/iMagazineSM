/**
 * @Description app行为相关
 * @Copyright zhouzhi073859@outlook.com
 */

import { Action, } from '@ngrx/store';

interface App {
  url: string;
}

export const SetUrl = 'SetUrl';

export class SetUrlAction implements Action {
  constructor(public payload: App, ) {}
  public readonly type = SetUrl;
}

export type Actions = SetUrlAction;
