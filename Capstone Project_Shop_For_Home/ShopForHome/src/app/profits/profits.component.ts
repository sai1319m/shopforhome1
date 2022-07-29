import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {

  d1:Date|any
  d2:Date|any
  submitted:boolean=false
  profits:number|any
  constructor(
    private aservice:AdminService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    
    this.submitted=true
    this.aservice.getProfits(this.d1,this.d2)
    .subscribe(
      res=>{
        this.profits=res
        console.log(res)
      })
    console.log(this.d1);
    console.log(this.d2)
  }
}
