/**
 * @Description 主题管理组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { ArticleService, } from '../article.service';
import { MatTableDataSource, } from '@angular/material';


@Component({
  selector: 'them-component',
  templateUrl: './them.component.html',
  styleUrls: ['./them.component.css', ],
}, )
export class ThemComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
  ) {}
  public displayedColumns = [ '主题名', '文章数量', '更多操作', ];
  public data: any;
  public ngOnInit() {
    this.articleService.getThemList().subscribe((res, ) => {
      this.data = new MatTableDataSource(res.data, );
    }, );
  }
}



