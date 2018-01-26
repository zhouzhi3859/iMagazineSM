/**
 * @Description 数据统计组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, } from '@angular/core';

@Component({
  selector: 'static-component',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css', ],
}, )
export class StaticComponent {
  public tabSelect = 0;
  // 选择日期时跳转
  public select(event, ) {
    console.log(event, );
  }
}
