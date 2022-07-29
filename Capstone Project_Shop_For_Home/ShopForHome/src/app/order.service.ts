import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient
  ) { }



  newOrder(items:any,code:string){
    
    for(let item of items){
      
    this.http.post(`http://localhost:8080/order/new/${sessionStorage.getItem('email')}/${code}`,item)
    .subscribe(
      res=>console.log(res)
    )
  }
}

getOrders(){
  return this.http.get(`http://localhost:8080/order/get/${sessionStorage.getItem('email')}`)
}

getAllOrders(){
  return this.http.get(`http://localhost:8080/order/getall`)
}

cancel(id:number){
  return this.http.delete(`http://localhost:8080/order/cancel/${id}`)
  
}

}
