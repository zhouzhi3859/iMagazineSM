/**
 * @Description 服务相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Injectable, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Store, } from '@ngrx/store';
import { Observable, } from 'rxjs';

// 引入组件
import * as userAct from '../../actions/user.action';
import * as rdc from '../../reducers/index';

// 引入环境
import { Config, } from '../../../environments/environment';

interface ILoginBody {
  account: string;
  pwd: string;
  state: number;
}

@Injectable()
export class LoginService {
  private config: any = Config;
  constructor(
    private http: HttpClient,
    private $store: Store<rdc.State>,
  ) {}
  // 登陆
  public login(body: ILoginBody, ): Observable<Object> {
    return this.http.post(this.config.apiUrl + '/user/login', body, );
  }
  // 设定用户在线
  public setUserOnline(data, ): void {
    this.$store.dispatch(new userAct.LoginAction(data, ), );
  }
}
