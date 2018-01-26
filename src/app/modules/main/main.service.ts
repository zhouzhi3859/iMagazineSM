/**
 * @Description 服务相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Injectable, } from '@angular/core';
import { Store, } from '@ngrx/store';
import { Observable, } from 'rxjs';

// 引入组件
import * as appAct from '../../actions/app.action';
import * as rdc from '../../reducers/index';

interface User {
  uid: string;
  username: string;
  logoUrl: string;
  isLogin: boolean;
}

@Injectable()
export class MainService {
  constructor(
    private $store: Store<rdc.State>,
  ) {}
  // 获取user全局状态
  public getUser(): Observable<User> {
    return this.$store.select(rdc.getUser, );
  }
  // 设定app全局url状态
  public setAppUrl(data, ): void {
    this.$store.dispatch(new appAct.SetUrlAction(data, ), );
  }
}

