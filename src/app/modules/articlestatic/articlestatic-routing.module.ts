/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { StaticComponent, } from './static/static.component';
import { SumComponent, } from './sum/sum.component';
import { ReadComponent, } from './read/read.component';
import { CommentComponent, } from './comment/comment.component';
import { CollectComponent, } from './collect/collect.component';
import { SearchComponent, } from './search/search.component';

const routes: Routes = [
  {
    path: 'static',
    component: StaticComponent,
    children: [
      {
        path: 'sum',
        component: SumComponent,
      },
      {
        path: 'read',
        component: ReadComponent,
      },
      {
        path: 'comment',
        component: CommentComponent,
      },
      {
        path: 'collect',
        component: CollectComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class ArticleStaticRoutingModule {}
