/**
 * @Description 测试模块
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import {
  MatButtonModule,
  MatSidenavModule,
  MatExpansionModule,
  MatInputModule,
} from '@angular/material';
// 引入组件
import { TestComponent, } from './test.component';
import { HeaderComponent, } from './header/header.component';
import { SidenavComponent, } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  exports: [
    TestComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  declarations: [
    TestComponent,
    HeaderComponent,
    SidenavComponent,
  ],
}, )
export class AllInModule {}
