/**
 * @Description 弹窗组件
 * @Copyright zhouzhi073859@outlook.com
 */

import { Component, Inject, Output, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';

interface IDialog {
  title?: string;
  content?: string;
  question?: string;
  confirmText?: string;
  cancelText?: string;
  confirmFn?: Function;
  cancelFn?: Function;
}

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css', ],
}, )
export class DialogComponent {
  constructor(
    @Output()
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA, )
    public data: IDialog,
  ) { }
  public result: string = '';
  // 是否有标题
  public hasTitle: boolean = this.data.hasOwnProperty('title', );
  // 是否有确认的方法
  public hasConfirmFn: boolean = this.data.hasOwnProperty('confirmFn', );
  // 是否有取消的方法
  public hasCancelFn: boolean = this.data.hasOwnProperty('cancelFn', );
  // 当没有取消的方法时，是否有取消的 '文字'
  public hasCancelText: boolean = !this.data.hasOwnProperty('cancelFn', ) &&
    ( this.data.hasOwnProperty('cancelText', ) || this.data.hasOwnProperty('question', ) );
  // 有没有要回答的问题
  public hasQuestion: boolean = this.data.hasOwnProperty('question', );
  // 获取返回的答案
  public answer() {
    this.dialogRef.close(this.result, );
  }
}
