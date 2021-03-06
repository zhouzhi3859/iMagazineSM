/**
 * @Description 路由相关
 * @Copyright zhouzhi073859@outlook.com
 */

// 导入模块
import { NgModule, } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

const routes: Routes = [
  {
    path: 'manage',
    loadChildren: 'app/modules/usermanage/usermanage.module#UserManageModule',
  },
  {
    path: 'static',
    loadChildren: 'app/modules/userstatic/userstatic.module#UserStaticModule',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class UserRoutingModule {}

