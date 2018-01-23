/**
 * @Description 用户管理相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { UserManageRoutingModule, } from './usermanage-routing.module';

// 引入组件
import { ManageComponent, } from './manage/manage.component';
import { ListComponent, } from './list/list.component';
import { DetailComponent, } from './detail/detail.component';

// 引入服务
import { UserManageService, } from './usermanage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserManageRoutingModule,
  ],
  exports: [],
  declarations: [
    ManageComponent,
    ListComponent,
    DetailComponent,
  ],
  providers: [
    UserManageService,
  ],
  entryComponents: [
  ],
}, )
export class UserManageModule {}
