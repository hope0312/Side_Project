import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SmalltoolsComponent } from './smalltools/smalltools.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path:'home', component:HomeComponent }, //首頁
  { path:'resume', component:ResumeComponent}, //履歷
  { path:'smalltools', component:SmalltoolsComponent}, //小工具
  { path:'portfolio', component:PortfolioComponent}, //作品集
  { path:'contant', component:ContactComponent }, //聯絡我
  { path: '**', redirectTo:'home' } //其他選擇回到首頁
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
