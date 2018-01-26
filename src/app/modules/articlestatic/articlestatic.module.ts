/**
 * @Description 文章统计相关模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { MatTabsModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatDialogModule, } from '@angular/material';
import { ArticleStaticRoutingModule, } from './articlestatic-routing.module';

// 引入组件
import { StaticComponent, } from './static/static.component';
import { SumComponent, } from './sum/sum.component';
import { ReadComponent, } from './read/read.component';
import { CommentComponent, } from './comment/comment.component';
import { CollectComponent, } from './collect/collect.component';
import { SearchComponent, } from './search/search.component';

// 引入服务
import { ArticleStaticService, } from './articlestatic.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ArticleStaticRoutingModule,
  ],
  exports: [
  ],
  declarations: [
    StaticComponent,
    SumComponent,
    ReadComponent,
    CommentComponent,
    CollectComponent,
    SearchComponent,
  ],
  providers: [
    ArticleStaticService,
  ],
  entryComponents: [
  ],
}, )
export class ArticleStaticModule {}

