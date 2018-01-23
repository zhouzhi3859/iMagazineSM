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
export class ArticleManageService {
  private config: any = Config;
  constructor(
    private http: HttpClient,
  ) {}
  // 根据ObjId、type与day获取相应文章的详情与统计数据
  public getDetail(body, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/detail', {params: body, }, );
  }
}

