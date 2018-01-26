/**
 * @Description 文章管理组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, OnDestroy, } from '@angular/core';

// 引入服务
import { ArticleManageService, } from '../articlemanage.service';

@Component({
  selector: 'manage-component',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css', ],
}, )
export class ManageComponent implements OnInit, OnDestroy {
  constructor(
    private articleManageService: ArticleManageService,
  ) {}
  
  public showDetailNav: boolean = false;
  
  public ngOnInit() {
    // 设定三级导航与路由联动
    this.articleManageService.getIsShowDetailNav().subscribe((res, ) => {
      this.showDetailNav = res;
    }, );
  }
  public ngOnDestroy() {
    this.articleManageService.clearIsShowDetailNav();
  }
}



