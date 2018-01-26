/**
 * @Description 文章管理相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { MatTableModule, MatPaginatorModule, } from '@angular/material';
import { ArticleManageRoutingModule, } from './articlemanage-routing.module';

// 引入组件
import { ManageComponent, } from './manage/manage.component';
import { ListComponent, } from './list/list.component';
import { DetailComponent, } from './detail/detail.component';

// 引入服务
import { ArticleManageService, } from './articlemanage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ArticleManageRoutingModule,
  ],
  exports: [],
  declarations: [
    ManageComponent,
    ListComponent,
    DetailComponent,
  ],
  providers: [
    ArticleManageService,
  ],
  entryComponents: [
  ],
}, )
export class ArticleManageModule {}

