/**
 * @Description 用户统计相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { UserStaticRoutingModule, } from './userstatic-routing.module';

// 引入组件
import { StaticComponent, } from './static/static.component';
import { SumComponent, } from './sum/sum.component';

// 引入服务
import { UserStaticService, } from './userstatic.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserStaticRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    StaticComponent,
    SumComponent,
  ],
  providers: [
    UserStaticService,
  ],
  entryComponents: [
  ],
}, )
export class UserStaticModule {}
