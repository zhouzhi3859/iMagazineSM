/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { StaticComponent, } from './static/static.component';
import { StaticSumComponent, } from './static/static-sum.component';
import { StaticReadComponent, } from './static/static-read.component';
import { StaticCommentComponent, } from './static/static-comment.component';
import { StaticCollectComponent, } from './static/static-collect.component';
import { StaticSearchComponent, } from './static/static-search.component';
import { ThemComponent, } from './them/them.component';
import { ListComponent, } from './manage/list.component';
import { DetailComponent, } from './manage/detail.component';

const routes: Routes = [
  {
    path: 'static',
    component: StaticComponent,
    children: [
      {
        path: 'sum',
        component: StaticSumComponent,
      },
      {
        path: 'read',
        component: StaticReadComponent,
      },
      {
        path: 'comment',
        component: StaticCommentComponent,
      },
      {
        path: 'collect',
        component: StaticCollectComponent,
      },
      {
        path: 'search',
        component: StaticSearchComponent,
      },
    ],
  },
  {
    path: 'them',
    component: ThemComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class ArticleRoutingModule {}

