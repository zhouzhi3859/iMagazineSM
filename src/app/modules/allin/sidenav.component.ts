/**
 * @Description 侧边导航组件
 * @Copyright zhouzhi073859@outlook.com
 */

import { Component, ElementRef, Input, DoCheck, } from '@angular/core';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.css', ],
}, )
export class SidenavComponent implements DoCheck {
  constructor(
    private elementRef: ElementRef,
  ) {}
  @Input()
  public navList: any;
  public ngDoCheck() {
    const sidenavButtons = this.elementRef.nativeElement.querySelectorAll('.mat-expansion-panel-body', );
    sidenavButtons.forEach((value, index, ) => {
      value.style.padding = 0;
    }, );
  }
}
