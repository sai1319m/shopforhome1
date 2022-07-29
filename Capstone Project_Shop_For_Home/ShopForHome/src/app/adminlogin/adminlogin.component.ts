import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admins: Array<Admin> = [];
  storeMsg: string = ""
  loginMsg: string = ""
  logoutMsg: string = ""
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();
  res: boolean | any
  constructor(public service: AdminService, private router: Router, private formBuilder: FormBuilder) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time
  public loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      var admin = new Admin(this.loginForm.value.email, this.loginForm.value.password);
      // check form values with registered user detials
      this.service.login(admin)
        .subscribe(res => {
          this.res = res
        },
          () => console.log('error'),
          () => {
            if (this.res) {
              alert("Admin Login  Success");
              sessionStorage.setItem('admin', this.loginForm.value.email)
              console.log(this.loginForm.value.email)
              sessionStorage.setItem('token', this.res.token)
              this.router.navigate(['/admin'])
            }
            else {
              alert("Invalid credentials")
            }
          }
        )}


    }

  }

