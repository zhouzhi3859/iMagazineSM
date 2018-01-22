/**
 * @Description 模块注入
 * @Copyright zhouzhi073859@outlook.com
 */

// 引入模块
import { NgModule, } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule, } from '@angular/forms';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { StoreModule, } from '@ngrx/store';
import { MatButtonModule, MatInputModule, MatDialogModule, } from '@angular/material';
import { LoginModule, } from './modules/login/login.module';
import { MainModule, } from './modules/main/main.module';
import { AppRoutingModule, } from './app-routing.module';

// 引入组件
import { reducers, } from './reducers';
import { DialogComponent, } from './components/dialog/dialog.component';
import { AppComponent, } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, ),
    LoginModule,
    MainModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
  ],
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  providers: [  ],
  entryComponents: [
    DialogComponent,
  ],
  bootstrap: [ AppComponent, ],
}, )
export class AppModule { }
