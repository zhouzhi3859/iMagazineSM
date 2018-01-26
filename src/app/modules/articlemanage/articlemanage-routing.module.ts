/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { ManageComponent, } from './manage/manage.component';
import { ListComponent, } from './list/list.component';
import { DetailComponent, } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      {
        path: 'list/:cid',
        component: ListComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'list',
        redirectTo: 'list/',
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class ArticleManageRoutingModule {}
