/**
 * @Description 用户相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { UserRoutingModule, } from './user-routing.module';

// 引入组件
import { StaticComponent, } from './static.component';
import { ListComponent, } from './list.component';
import { DetailComponent, } from './detail.component';

// 引入服务
import { UserService, } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [
    StaticComponent,
    ListComponent,
    DetailComponent,
  ],
  providers: [ UserService, ],
  entryComponents: [
  ],
}, )
export class UserModule {}
