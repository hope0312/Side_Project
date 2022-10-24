import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ApiUseService} from '../api-use.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //取得form上的群組元件
  form!: FormGroup;
  constructor(
    private ApiUseService:ApiUseService, //使用API相關
    private formBuilder:FormBuilder //建立表單用
  ) { }

  //form元件給定初始值
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      e_mail: [''],
      detail: ['']
    })
  }
  ngAfterViewInit(){
    // this.ApiUseService.Selection_API('Cusfeedback','get').subscribe(resp =>{
    //   console.log(resp)
    // })
  }

  //送出後取得所有元件
  getFormValue(){
    var form_value = this.form.value;
    if(
      form_value.name !== null &&
      form_value.e_mail !== null &&
      form_value.detail !== null &&
      form_value.name !== '' &&
      form_value.e_mail !== '' &&
      form_value.detail !== ''
      ){
        //如果成功，提示訊息不要顯示
        document.getElementById('warning')?.setAttribute('style','display:none');
        //設定傳送資料，加一筆reply為必須的
        form_value['reply'] = 'N'
        //打API
        this.ApiUseService.Selection_API('Cusfeedback','post',form_value).subscribe(resp=>{
          console.log('傳送狀態:',resp)
          if(resp.result === true){
            this.form.reset(); //清空值
            this.form_change(); //顯示需要顯示，其他關閉
          }
        })
      }else{
        //如果失敗，提示訊息顯示
        document.getElementById('warning')?.setAttribute('style','display:block');
      }
    console.log('this.form',this.form.value)
  }
  //清除所有元件
  resetForm(){
    this.form.reset();
  }
  //成功的話 只顯示需要顯示的
  form_change(){
    document.getElementById('form')?.setAttribute('style','display:none');
    document.getElementById('explain')?.setAttribute('style','display:none');
    document.getElementById('gratitudes')?.setAttribute('style','display:block');
    document.getElementById('message')?.setAttribute('style','display:block; padding: 7rem;');
  }
}
