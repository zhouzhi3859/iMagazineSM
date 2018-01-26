/**
 * @Description 数据统计评价相关组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { MatTableDataSource, MatDialog, } from '@angular/material';

// 引入组件
import { DialogComponent, } from '../../../components/dialog/dialog.component';

// 引入服务
import { ArticleStaticService, } from '../articlestatic.service';

@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css', ],
}, )
export class CommentComponent implements OnInit {
  constructor(
    private articlestaticService: ArticleStaticService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {}
  public day = 1;

  // 数据源
  public data: any;

  // 弹窗与其开闭状态
  public dialogRef: any;
  public dialogRefOpen: boolean = false;

  public displayedColumns = ['标题', '评论量', '更多操作', ];

  public showTop() {
    this.articlestaticService.getCommentTop({day: this.day, }, ).subscribe((res, ) => {
      // 如果存在就显示
      if(res.data.length > 0) {
        this.data = new MatTableDataSource(res.data, );
      }else { // 不存在的话，数据置为空并弹窗提醒
        this.data = new MatTableDataSource([], );
        this.dialogRef = this.dialog.open(DialogComponent, {
          data: {
            content: '暂无相关数据',
          },
          // 不显示遮罩
          hasBackdrop: false,
        }, );
        // 设置弹窗状态为开启
        this.dialogRefOpen = true;
        // 2s后自动关闭
        setTimeout(() => {
          if(this.dialogRef && this.dialogRefOpen) {
            // 关闭弹窗
            this.dialogRef.close();
            // 设置弹窗状态为关闭
            this.dialogRefOpen = false;
          }
        }, 2000, );
      }
    }, );
  }

  public ngOnInit() {
    // 加载时获取传过来的参数，来显示对应时间段的数据
    this.route.params.subscribe((params, ) => {
      this.day = Number(params.day, );
      this.articlestaticService.sendIndex(2, );
      // 如果弹窗存在且状态为开启
      if(this.dialogRefOpen) {
        // 关闭弹窗
        this.dialogRef.close();
        // 设置弹窗状态为关闭
        this.dialogRefOpen = false;
      }
      this.showTop();
    }, );
  }
}



