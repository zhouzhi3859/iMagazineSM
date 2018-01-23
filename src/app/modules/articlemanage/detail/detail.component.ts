/**
 * @Description 文章详情组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

// 引入服务
import { ArticleManageService, } from '../articlemanage.service';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', ],
}, )
export class DetailComponent implements OnInit {
  constructor(
    private articlemanageService: ArticleManageService,
    private route: ActivatedRoute,
  ) {}
  
  public article: any;
  public showArticle: boolean = false;
  
  public detail: any[];
  
  public ngOnInit() {
    this.route.params.subscribe((data, ) => {
      this.articlemanageService.getDetail({ObjId: data.id, type: data.type || '', day: data.day, }, ).subscribe((res, ) => {
        this.article = res.data.article;
        this.showArticle = true;
      }, );
    }, );
  }
}
