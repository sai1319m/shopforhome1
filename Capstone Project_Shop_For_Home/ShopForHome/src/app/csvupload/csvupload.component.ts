import { HttpClient } from '@angular/common/http';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csvupload',
  templateUrl: './csvupload.component.html',
  styleUrls: ['./csvupload.component.css']
})
export class CsvuploadComponent implements OnInit {

file:File|any
   
  constructor(
    private http:HttpClient,private router:Router
  ) { }

  ngOnInit(): void {
  }

  onFileSelect(event:any){
    this.file=event.target.files[0];
  }

  upload(){
    const fd=new FormData();
    fd.append('file',this.file)
    this.http.post("http://localhost:8080/csv/upload",fd)
    .subscribe(res=>{
      console.log(res)
      alert('Products Added SuccessFully...!')
      this.router.navigateByUrl('/products')
    })
   
  }
}
