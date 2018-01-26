/**
 * @Description 文章详情组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { DomSanitizer, SafeHtml, } from '@angular/platform-browser';
import { ActivatedRoute, } from '@angular/router';
import { MatTableDataSource, } from '@angular/material';

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
    // xss过滤器
    private sanitizer: DomSanitizer,
  ) {}

  public day: number;

  public article: any;
  public showArticle: boolean = false;
  public DisplayedColumns = ['用户', '时间', '更多操作', ];
  
  public readDetail: any;
  public showRead: boolean = false;

  public commentDetail: any;
  public showComment: boolean = false;
  
  public collectDetail: any;
  public showCollect: boolean = false;
  
  public content: SafeHtml;

  public ngOnInit() {
    this.route.params.subscribe((params, ) => {
      this.articlemanageService.setIsShowDetailNav(true, );
      this.day = params.day ? Number(params.day, ) : 30;
      this.articlemanageService.getDetail({ObjId: params.id, type: params.type || '', day: params.day, }, ).subscribe((res, ) => {
        this.article = res.data.article;
        const content = `<style>.article-content p {text-indent: 2rem;}</style>` + res.data.article.content;
        this.content = this.sanitizer.bypassSecurityTrustHtml(content, );
        for(const i in res.data.detail) {
          if(res.data.detail[i].type === 'read') {
            this.readDetail = new MatTableDataSource(res.data.detail[i].list, );
          }else if(res.data.detail[i].type === 'comment') {
            this.commentDetail = new MatTableDataSource(res.data.detail[i].list, );
          }else if(res.data.detail[i].type === 'collect') {
            this.collectDetail = new MatTableDataSource(res.data.detail[i].list, );
          }
        }
        this.showArticle = true;
        if(params.type === 'read') {
          this.showRead = true;
        }else if(params.type === 'comment') {
          this.showComment = true;
        }else if(params.type === 'collect') {
          this.showCollect = true;
        }else {
          this.showRead = true;
          this.showComment = true;
          this.showCollect = true;
        }
      }, );
    }, );
  }
}
