import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  //Loading admin details from the backend
  loadAdminDetails(): Observable<Admin[]> {
    return this.http.get<Admin[]>("http://localhost:8080/Admin/displayAdmin")
  }

  storeAdminDetails(admin: Admin): Observable<string> {
    return this.http.post("http://localhost:8080/Admin/register", admin, { responseType: 'text' })
  }

  login(admin: Admin) {
    return this.http.post("http://localhost:8080/Admin/login", admin)
  }

  logoutAdminDetails(email: string): Observable<string> {
    return this.http.get("http://localhost:8080/Admin/logout/" + email, { responseType: 'text' })
  }

  adminuser(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/Admin/displayAdmin");
  }


  getProfits(d1:Date,d2:Date){
    
    const fd=new FormData();
    return this.http.get(`http://localhost:8080/Admin/profits/${d1+"/"+d2}`)
  }
}



