/**
 * @Description 启动器
 * @Copyright zhouzhi073859@outlook.com
 */

import { enableProdMode, } from '@angular/core';
import { platformBrowserDynamic, } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule, } from './app/app.module';
// import { environment, } from './environments/environment';

// if (environment.production) {
enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule, )
  .catch((err, ) => console.log(err, ), );
