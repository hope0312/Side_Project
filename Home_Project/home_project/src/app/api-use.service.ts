import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUseService {

  constructor(private http:HttpClient) { }

  /**
  ** Product 產品 (get、post、patch、delete API相關)
  ** Cusfeedback 聯絡我 (get、post API相關)
  ** MemberLogin 會員登入 (get、post、patch、delete API相關)
  */
  Selection_API(
    usage: string,
    method: string,
    data?: any
  ): Observable<any>{
    var url = `https://localhost:7037/api/${usage}`;
    //建議不要直接使用any
    switch(usage){
      case 'Product':
      case 'MemberLogin':
        console.info(`即將打入${usage}的API`);
        switch(method){
          case 'get':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.get<any>(url)
              })
            )
          case 'post':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.post<any>(url,data)
              })
            )
          case 'patch':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.patch<any>(url,data)
              })
            )
          case 'delete':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.delete<any>(url + '/' + data)
              })
            )
          default:
            console.info('method確定是否為正確,回傳空值');
            return of('')
        }
      case 'Cusfeedback':
        console.info(`即將打入${usage}API`);
        switch(method){
          case 'get':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.get<any>(url)
              })
            )
          case 'post':
            console.info(`你選擇的是${method}方法`);
            return of (Response).pipe(
              concatMap(resp =>{
                return this.http.post<any>(url,data)
              })
            )
          default:
            console.info('method確定是否為正確,回傳空值');
            return of('')
        }
      default:
        console.info('usage確定是否為正確,回傳空值');
        return of('')

    }
  }
}
