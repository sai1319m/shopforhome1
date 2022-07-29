import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginForm!: FormGroup
  res:boolean|any
  constructor(public service: UsersService, private route: Router, private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {

    if(this.loginForm.valid){
    var user= new Users(this.loginForm.value.email,this.loginForm.value.password);
    // check form values with registered user detials
    this.service.login(user)
    .subscribe(res => {
        this.res=res
      },
      ()=>console.log('error'),
      ()=>{
        if (this.res) {
          alert("User Login  Success");
          sessionStorage.setItem('email',this.loginForm.value.email)
          console.log(this.loginForm.value.email)
          sessionStorage.setItem('token', this.res.token)
          this.router.navigate(['/products'])
        }
        else {
          alert("Invalid credentials")
        }
      }
      
      )
    }
    }
  }
