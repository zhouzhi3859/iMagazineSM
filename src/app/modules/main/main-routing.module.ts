/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

// 引入组件
import { IndexComponent, } from './index/index.component';
import { PlaceholderComponent, } from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path: 'main',
    component: IndexComponent,
    children: [
      {
        path: 'placeholder',
        component: PlaceholderComponent,
      },
      {
        path: 'article',
        loadChildren: 'app/modules/article/article.module#ArticleModule',
      },
      {
        path: 'user',
        loadChildren: 'app/modules/user/user.module#UserModule',
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class MainRoutingModule {}

