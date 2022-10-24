import { Component, Injectable, OnInit } from '@angular/core';
//使用service
import {ApiUseService} from '../api-use.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

//試串接使用
@Injectable({
  providedIn: 'root',
})

export class HomeComponent implements OnInit {

  //注入ApiUseService，以下可使用ApiUseService中function
  constructor(private ApiUseService:ApiUseService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let data =
    {
      "C_Id":4,
      "Name":"BlackTea",
      "Quantity":30,
      "Price":45
    }
    console.log(data)
    // this.ApiUseService.Selection_API('Product','get').subscribe(resp=>{
    //   console.log(resp);
    // })
    // this.ApiUseService.Selection_API('Cusfeedback','get').subscribe(resp=>{
    //   console.log(resp);
    // })
    // this.ApiUseService.Selection_API('MemberLogin','get').subscribe(resp=>{
    //   console.log(resp);
    // })
  }
}
