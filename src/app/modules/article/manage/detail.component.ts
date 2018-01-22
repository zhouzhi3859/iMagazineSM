/**
 * @Description 文章详情组件
 * @Copyright zhouzhi073859@outlook.com
 */

import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'articledetail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', ],
}, )
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((data, ) => {
      console.log(data, );
    }, );
  }
}
