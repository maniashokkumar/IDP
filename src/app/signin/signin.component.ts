import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  database:any;
  database1:any;


  ngOnInit(): void {
  }
  create(name:any,email:any){
   
     this.database={name,email};
    console.log(this.database);
    this. database1=JSON.stringify(this.database);
    localStorage.setItem(email,this.database1);
    console.log(this.database1)


    var b:any=localStorage.getItem(email);
    var c=JSON.parse(b);
    console.log(c);
  }
 
}
