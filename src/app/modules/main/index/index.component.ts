/**
 * @Description 首页组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, } from '@angular/core';
import { Router, NavigationEnd, } from '@angular/router';

// 引入服务
import { MainService, } from '../main.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'index-component',
  templateUrl: './index.component.html',
  styleUrls: [ './index.component.css', ],
}, )
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
    private mainService: MainService,
  ) {}
  public sidenavList = [
    {
      title: '文章相关',
      detail: [
        { subtitle: '数据统计', clickFn: () => {
            this.router.navigate(['main/article/static/sum', {day: '1', }, ], );
          },
        },
        { subtitle: '主题管理', clickFn: () => {
            this.router.navigate(['main/article/them', ], );
          },
        },
        { subtitle: '文章管理', clickFn: () => {
            this.router.navigate(['main/article/manage/list', ], );
          },
        },
      ],
    }, {
      title: '用户相关',
      detail: [
        { subtitle: '数据统计', clickFn: () => {
            this.router.navigate(['main/user/static/sum', ], );
          },
        },
        { subtitle: '用户管理', clickFn: () => {
            this.router.navigate(['main/user/manage/list', ], );
          },
        },
      ],
    },
  ];
  public ngOnInit() {
    this.mainService.getUser().subscribe((res, ) => {
      if (!res.isLogin) {
        this.router.navigate(['login', ], { replaceUrl: true, }, );
      }
    }, );
    this.router.events
      .filter((event, ) => event instanceof NavigationEnd, )
      .subscribe((event: any, ) => {
        console.log(event.url, );
      }, );
  }
}






