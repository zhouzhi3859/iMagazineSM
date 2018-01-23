/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { ThemComponent, } from './them/them.component';
const routes: Routes = [
  {
    path: 'static',
    loadChildren: 'app/modules/articlestatic/articlestatic.module#ArticleStaticModule',
  },
  {
    path: 'them',
    component: ThemComponent,
  },
  {
    path: 'manage',
    loadChildren: 'app/modules/articlemanage/articlemanage.module#ArticleManageModule',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class ArticleRoutingModule {}

