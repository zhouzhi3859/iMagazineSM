/**
 * @Description 登陆组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, } from '@angular/core';
import { DomSanitizer, SafeStyle, } from '@angular/platform-browser';
import { Router, } from '@angular/router';
import { MatDialog, } from '@angular/material';

// 引入组件
import { DialogComponent, } from '../../components/dialog/dialog.component';

// 引入服务
import { LoginService, } from './login.service';

import { IResult, } from '../../models/main.model';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', ],
}, )
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private dialog: MatDialog,
    // xss过滤器
    private sanitizer: DomSanitizer,
  ) {}
  // 账号
  public account: string = 'admin';
  // 密码
  public pwd: string;
  // 状态 99 - 管理员
  public state: number = 99;
  // xss过滤css
  public safeStyle: SafeStyle = this.sanitizer.bypassSecurityTrustStyle(
    'background: url("../../../assets/img/login_bg_' + Math.ceil(Math.random() * 9.9, ) + '.jpg");background-size: cover;',
    );
  public login() {
    // 登陆
    this.loginService.login({ account: this.account, pwd: this.pwd, state: this.state, }, ).subscribe((res: IResult, ) => {
      // 弹出登陆结果
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          content: res.msg,
        },
        // 不能点击遮罩退出
        disableClose: true,
      }, );
      // 2s后自动关闭
      setTimeout(() => {
        dialogRef.close();
      }, 2000, );
      // 登陆成功
      if(res.code === 0) {
        // 更新全局状态
        this.loginService.setUserOnline(res.data, );
        // 弹窗关闭后跳转首页
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['', ], { replaceUrl: true, }, );
        }, );
      }
    }, );
  }
}
