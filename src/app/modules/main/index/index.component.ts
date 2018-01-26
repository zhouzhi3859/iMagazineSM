/**
 * @Description 首页组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, ViewChild, OnInit, } from '@angular/core';
import { Router, NavigationEnd,  } from '@angular/router';

// 引入组件
import { SidenavComponent, } from '../../allin/sidenav/sidenav.component';

// 引入服务
import { MainService, } from '../main.service';

import 'rxjs/add/operator/filter';

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
  
  @ViewChild(SidenavComponent, )
  public sidenav: SidenavComponent;

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
            this.router.navigate(['main/article/manage/list', '', ], );
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
    // 查看登陆状态，如果没登陆就跳转到登陆页面
    this.mainService.getUser().subscribe((res, ) => {
      if (!res.isLogin) {
        this.router.navigate(['login', ], { replaceUrl: true, }, );
      }
    }, );
    // 监听路由变化，设定二级导航与路由联动
    this.router.events.filter((event, ) => event instanceof NavigationEnd, )
      .subscribe((event: any, ) => {
        const url = event.url;
        this.mainService.setAppUrl({url, }, );
        if(url.indexOf('main/article', ) > 0) {
          this.sidenav.step = 0;
        }else if(url.indexOf('main/user', ) > 0) {
          this.sidenav.step = 1;
        }else if(url.indexOf('main/placeholder', ) > 0) {
          this.sidenav.step = 1;
        }
      }, );
  }
}






