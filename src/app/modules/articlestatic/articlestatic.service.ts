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
export class ArticleStaticService {
  private config: any = Config;
  constructor(
    private http: HttpClient,
  ) {}
  // 获取统计数据
  public getStatic(body, ): Observable<any> {
    body.day = body.day || 1;
    
    return this.http.get(this.config.apiUrl + '/article/static', { params: body, }, );
  }
  // 获取指定时间段内阅读量top5
  public getReadTop(body, ): Observable<any> {
    body.day = body.day || 1;
    
    return this.http.get(this.config.apiUrl + '/article/top/read', { params: body, }, );
  }
  // 获取指定时间段内评价量top5
  public getCommentTop(body, ): Observable<any> {
    body.day = body.day || 1;
    
    return this.http.get(this.config.apiUrl + '/article/top/comment', {params: body, }, );
  }
  // 获取指定时间段内收藏量top5
  public getCollectTop(body, ): Observable<any> {
    body.day = body.day || 1;
    
    return this.http.get(this.config.apiUrl + '/article/top/collect', {params: body, }, );
  }
  // 获取指定时间段内搜索量top5
  public getSearchTop(body, ): Observable<any> {
    body.day = body.day || 1;
    
    return this.http.get(this.config.apiUrl + '/article/top/search', {params: body, }, );
  }
}

