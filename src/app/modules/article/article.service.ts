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
  // 获取统计数据
  public getStatic(day: number = 1, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/static', { params: {day: String(day, ), }, }, );
  }
  // 获取指定时间段内阅读量top5
  public getReadTop(day: number = 1, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/top/read', { params: {day: String(day, ), }, }, );
  }
  // 获取指定时间段内评价量top5
  public getCommentTop(day: number = 1, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/top/comment', {params: {day: String(day, ), }, }, );
  }
  // 获取指定时间段内收藏量top5
  public getCollectTop(day: number = 1, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/top/collect', {params: {day: String(day, ), }, }, );
  }
  // 获取指定时间段内搜索量top5
  public getSearchTop(day: number = 1, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/top/search', {params: {day: String(day, ), }, }, );
  }
  // 获取主题列表
  public getThemList(): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/them/list', );
  }
}
