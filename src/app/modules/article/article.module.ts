/**
 * @Description 文章相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { MatTabsModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { AllInModule, } from '../allin/allin.module';
import { ArticleRoutingModule, } from './article-routing.module';

// 引入组件
import { StaticComponent, } from './static/static.component';
import { StaticSumComponent, } from './static/static-sum.component';
import { StaticReadComponent, } from './static/static-read.component';
import { StaticCommentComponent, } from './static/static-comment.component';
import { StaticCollectComponent, } from './static/static-collect.component';
import { StaticSearchComponent, } from './static/static-search.component';
import { ThemComponent, } from './them/them.component';
import { ListComponent, } from './manage/list.component';
import { DetailComponent, } from './manage/detail.component';

// 引入服务
import { ArticleService, } from './article.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AllInModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ArticleRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    StaticComponent,
    StaticSumComponent,
    StaticReadComponent,
    StaticCommentComponent,
    StaticCollectComponent,
    StaticSearchComponent,
    ThemComponent,
    ListComponent,
    DetailComponent,
  ],
  providers: [ ArticleService, ],
  entryComponents: [
  ],
}, )
export class ArticleModule {}
