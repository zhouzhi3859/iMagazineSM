/**
 * @Description 用户相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { UserStaticModule, } from '../userstatic/userstatic.module';
import { UserManageModule, } from '../usermanage/usermanage.module';
import { UserRoutingModule, } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserStaticModule,
    UserManageModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
}, )
export class UserModule {}
