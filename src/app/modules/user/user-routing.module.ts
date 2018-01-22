/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 导入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { StaticComponent, } from './static.component';
import { ListComponent, } from './list.component';
import { DetailComponent, } from './detail.component';

const routes: Routes = [
  {
    path: 'static',
    component: StaticComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class UserRoutingModule {}

