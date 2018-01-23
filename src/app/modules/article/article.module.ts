/**
 * @Description 文章相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { AllInModule, } from '../allin/allin.module';
import { ArticleStaticModule, } from '../articlestatic/articlestatic.module';
import { ArticleManageModule, } from '../articlemanage/articlemanage.module';
import { ArticleRoutingModule, } from './article-routing.module';

// 引入组件
import { ThemComponent, } from './them/them.component';

// 引入服务
import { ArticleService, } from './article.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AllInModule,
    ArticleStaticModule,
    ArticleManageModule,
    ArticleRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    ThemComponent,
  ],
  providers: [ ArticleService, ],
  entryComponents: [
  ],
}, )
export class ArticleModule {}
