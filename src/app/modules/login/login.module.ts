/**
 * @Description 登陆模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';
import { MatButtonModule, MatInputModule, } from '@angular/material';
import { LoginRoutingModule, } from './login-routing.module';

// 引入组件
import { LoginComponent, } from './login.component';

// 引入服务
import { LoginService, } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
  ],
  providers: [ LoginService, ],
  entryComponents: [
  ],
}, )
export class LoginModule {}
