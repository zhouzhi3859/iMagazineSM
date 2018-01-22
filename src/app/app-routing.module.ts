/**
 * @Description 路由模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

// import { LoginComponent, } from './modules/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule',
  },
  {
    path: 'main',
    loadChildren: 'app/modules/main/main.module#MainModule',
  },
  {
    path: '',
    redirectTo: 'main/placeholder',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, ), ],
  exports: [ RouterModule, ],
}, )
export class AppRoutingModule {}
