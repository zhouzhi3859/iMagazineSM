/**
 * @Description 侧边导航组件
 * @Copyright zhouzhi073859@outlook.com
 */

import { Component, ElementRef, Input, } from '@angular/core';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.css', ],
}, )
export class SidenavComponent {
  constructor(
    private elementRef: ElementRef,
  ) {}
  public step: number = 0;

  @Input()
  public navList: any;

  // 设定左边卡片展开
  public setStep(index, ) {
    this.step = index;
    const sidenavButtons = this.elementRef.nativeElement.querySelectorAll('.mat-expansion-panel-body', );
    sidenavButtons.forEach((value, index, ) => {
      value.style.padding = 0;
    }, );
  }
}
