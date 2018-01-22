/**
 * @Description 首页模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { AllInModule, } from '../allin/allin.module';
import { ArticleModule, } from '../article/article.module';
import { UserModule, } from '../user/user.module';
import { MainRoutingModule, } from './main-routing.module';

// 引入组件
import { IndexComponent, } from './index/index.component';
import { PlaceholderComponent, } from './placeholder/placeholder.component';

// 引入服务
import { MainService, } from './main.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AllInModule,
    ArticleModule,
    UserModule,
    MainRoutingModule,
  ],
  exports: [],
  declarations: [
    IndexComponent,
    PlaceholderComponent,
  ],
  providers: [
    MainService,
  ],
  entryComponents: [
  ],
}, )
export class MainModule {}

