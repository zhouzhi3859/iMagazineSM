/**
 * @Description 数据统计组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { Router, NavigationEnd, } from '@angular/router';

@Component({
  selector: 'static-component',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css', ],
}, )
export class StaticComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  public tabSelect = 0;
  public day = '1';

  // 选择日期时跳转
  public select(event, ) {
    this.day = String(event.value, );
    if(this.tabSelect === 0) {
      this.router.navigate(['/main/article/static/sum', {day: this.day, }, ], { replaceUrl: true, }, );
    }else if(this.tabSelect === 1) {
      this.router.navigate(['/main/article/static/read', {day: this.day, }, ], { replaceUrl: true, }, );
    }else if(this.tabSelect === 2) {
      this.router.navigate(['/main/article/static/comment', {day: this.day, }, ], { replaceUrl: true, }, );
    }else if(this.tabSelect === 3) {
      this.router.navigate(['/main/article/static/collect', {day: this.day, }, ], { replaceUrl: true, }, );
    }else if(this.tabSelect === 4) {
      this.router.navigate(['/main/article/static/search', {day: this.day, }, ], { replaceUrl: true, }, );
    }
  }

  // 选择不同tab时跳转
  public change(event, ) {
    this.tabSelect = event.index;
    if(this.tabSelect === 0) {
      this.router.navigate(['/main/article/static/sum', {day: this.day, }, ], );
    }else if(this.tabSelect === 1) {
      this.router.navigate(['/main/article/static/read', {day: this.day, }, ], );
    }else if(this.tabSelect === 2) {
      this.router.navigate(['/main/article/static/comment', {day: this.day, }, ], );
    }else if(this.tabSelect === 3) {
      this.router.navigate(['/main/article/static/collect', {day: this.day, }, ], );
    }else if(this.tabSelect === 4) {
      this.router.navigate(['/main/article/static/search', {day: this.day, }, ], );
    }
  }

  //
  public ngOnInit() {
    // 加载时默认跳转到概览，显示24小时内数据
    this.router.navigate(['/main/article/static/sum', {day: '1', }, ], );
    // 监听路由变化，不同的路由激活对应的选项
    this.router.events.filter((event, ) => event instanceof NavigationEnd, )
      .subscribe((event: any, ) => {
        const url = event.url;
        if(url.indexOf('main/article/static/sum', ) > 0) {
          this.tabSelect = 0;
        }else if(url.indexOf('main/article/static/read', ) > 0) {
          this.tabSelect = 1;
        }else if(url.indexOf('main/article/static/comment', ) > 0) {
          this.tabSelect = 2;
        }else if(url.indexOf('main/article/static/collect', ) > 0) {
          this.tabSelect = 3;
        }else if(url.indexOf('main/article/static/search', ) > 0) {
          this.tabSelect = 4;
        }
      }, );
  }
}
