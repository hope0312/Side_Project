import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SmalltoolsComponent } from './smalltools/smalltools.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent, //聯絡我
    HomeComponent, //主頁
    ResumeComponent, //履歷
    SmalltoolsComponent, //小工具
    PortfolioComponent, //作品集
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //要加在BrowserModule後面不然會有Error
    AppRoutingModule,
    FormsModule, //使用form相關
    ReactiveFormsModule //使用form相關
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
