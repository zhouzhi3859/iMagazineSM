/**
 * @Description 文章列表组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { MatPaginator, MatTableDataSource, } from '@angular/material';

// 引入服务
import { ArticleManageService, } from '../articlemanage.service';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', ],
}, )
export class ListComponent implements OnInit {
  constructor(
    private articleManageService: ArticleManageService,
    private route: ActivatedRoute,
  ) {}
  @ViewChild(MatPaginator, )
  public paginator: MatPaginator;
  public DisplayedColumns = ['封面', '标题', '阅读量', '评论量', '收藏量', '更多操作', ];
  // public
  public articleList: any;
  public totalCount: number;
  
  public cid: any;
  
  public pageNo: number = 0;
  public pageSize: number = 20;
  
  public change(event, ) {
    this.pageNo = event.pageIndex;
    this.pageSize = event.pageSize;
    this.articleManageService.getList({cid: this.cid, pageNo: this.pageNo, pageSize: this.pageSize, }, ).subscribe((res, ) => {
      this.articleList = new MatTableDataSource(res.data.articleList, );
      this.totalCount = Number(res.data.totalCount, );
    }, );
  }
  
  public ngOnInit() {
    this.route.params.subscribe((params, ) => {
      this.articleManageService.setIsShowDetailNav(false, );
      this.cid = params.cid || '';
      if(params.cid) {
        this.articleManageService.getList({cid: this.cid, }, ).subscribe((res, ) => {
          this.articleList = new MatTableDataSource(res.data.articleList, );
          this.articleList.paginator = this.paginator;
          this.totalCount = Number(res.data.totalCount, );
        }, );
      }else {
        this.articleManageService.getList({}, ).subscribe((res, ) => {
          this.articleList = new MatTableDataSource(res.data.articleList, );
           this.articleList.paginator = this.paginator;
           this.totalCount = Number(res.data.totalCount, );
        }, );
      }
      
    }, );
  }
}



