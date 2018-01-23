/**
 * @Description 数据统计概览组件
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { Component, OnInit, ElementRef, } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import * as echarts from 'echarts';

// 引入服务
import { ArticleStaticService, } from '../articlestatic.service';

@Component({
  selector: 'sum-component',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css', ],
}, )
export class SumComponent implements OnInit {
  constructor(
    private articlestaticService: ArticleStaticService,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
  ) {}
  public day = 1;

  public title = '';

  public option = {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['阅读量', '评价量', '收藏量', '搜索量', ],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
    },
    series: [],
  };

  public showStatic() {
    this.articlestaticService.getStatic({day: this.day, }, ).subscribe((res, ) => {
      // 组合数据
      const collectData = [];
      const commontData = [];
      const readData = [];
      const searchNum = [];
      const days = [];
      for(const i in res.data) {
        collectData.push(res.data[i].collectNum, );
        commontData.push(res.data[i].commentNum, );
        readData.push(res.data[i].readNum, );
        searchNum.push(res.data[i].searchNum, );
        days.push(res.data[i].time, );
      }
      const data = [
        {name: '阅读量', type: 'line', data: readData, },
        {name: '评价量', type: 'line', data: commontData, },
        {name: '收藏量', type: 'line', data: collectData, },
        {name: '搜索量', type: 'line', data: searchNum, },
      ];
      // 配置echarts
      this.title = this.day === 1 ? '24小时内数据' : this.day + '天内数据';
      this.option.xAxis.data = days;
      this.option.series = data;
      const sumChart = echarts.init(this.elementRef.nativeElement.querySelector('.sum-container', ), );
      sumChart.setOption(this.option, );
    }, );
  }
  public ngOnInit() {
    // 加载时获取传过来的参数，来显示对应时间段的数据
    this.route.params.subscribe((data, ) => {
      this.day = Number(data.day, );
      this.showStatic();
    }, );
  }
}
