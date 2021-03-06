/**
 * @Description 服务相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Injectable, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, } from 'rxjs';

// 引入环境
import { Config, } from '../../../environments/environment';

@Injectable()
export class ArticleService {
  private config: any = Config;
  constructor(
    private http: HttpClient,
  ) {}
  // 获取主题列表
  public getThemList(): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/them/list', );
  }
}
