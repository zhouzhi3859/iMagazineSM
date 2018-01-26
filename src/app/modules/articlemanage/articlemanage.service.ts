/**
 * @Description 服务相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Injectable, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Subject, } from 'rxjs/Subject';

// 引入环境
import { Config, } from '../../../environments/environment';

@Injectable()
export class ArticleManageService {
  private config: any = Config;
  private detailNavSubject = new Subject<any>();
  constructor(
    private http: HttpClient,
  ) {}
  // 根据类别获取对应的文章列表
  public getList(body, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/list', {params: body, }, );
  }
  
  // 根据ObjId、type与day获取相应文章的详情与统计数据
  public getDetail(body, ): Observable<any> {
    return this.http.get(this.config.apiUrl + '/article/detail', {params: body, }, );
  }
  // 获取是否显示详情三级导航
  public getIsShowDetailNav(): Observable<any> {
    return this.detailNavSubject.asObservable();
  }
  // 发送是否显示详情三级导航
  public setIsShowDetailNav(isShow: boolean, ) {
    this.detailNavSubject.next(isShow, );
  }
  // 重置三级导航观察者
  public clearIsShowDetailNav(): void {
    this.detailNavSubject = new Subject<any>();
  }
}

