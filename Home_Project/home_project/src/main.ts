import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

var url = location.href; //取得網址
var urlstr = url.lastIndexOf("/"); //取得最後/之後的名稱包含/
var url_name = url.substring(urlstr+1); //取得名稱+1是因為去掉/

var result: any[] = new Array<Element>(); //宣告Array
result.push(document.getElementById("home")); //取得id=home，即ul > a
result.push(document.getElementById("resume")); //取得id=resume，即ul > a
result.push(document.getElementById("smalltools")); //取得id=smalltools，即ul > a
result.push(document.getElementById("portfolio")); //取得id=portfolio，即ul > a
result.push(document.getElementById("contant")); //取得id=contant，即ul > a

//使用foreach跑全部Array
result.forEach(res =>{
  //取得document中的id比對URL中資訊
  if(res.id === url_name){ //如果ul的名稱 === 網址名稱
    res.className = "nav-link active";
  }else{
    res.className = "nav-link";
  }
})

//例外情況，當localhost後面沒任何東西，跳回首頁但url_name會沒值
if(url_name === ''){
  document.getElementById("home")?.setAttribute('class','nav-link active');
}
