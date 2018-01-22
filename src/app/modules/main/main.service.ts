/**
 * @Description 服务相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Injectable, } from '@angular/core';
// import { HttpClient, } from '@angular/common/http';
import { Store, } from '@ngrx/store';
import { Observable, } from 'rxjs';

// 引入组件
import * as rdc from '../../reducers/index';

// 引入环境
// import { Config, } from '../../../environments/environment';

interface User {
  uid: string;
  username: string;
  logoUrl: string;
  isLogin: boolean;
}

@Injectable()
export class MainService {
  // private config: any =  Config;
  constructor(
    // private http: HttpClient,
    private $store: Store<rdc.State>,
  ) {}
  // 获取用户全局状态
  public getUser(): Observable<User> {
    return this.$store.select(rdc.getUser, );
  }
}

