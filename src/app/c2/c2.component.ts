import { Component, OnInit } from '@angular/core';
import { ServicedemoService } from '../servicedemo.service';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
 
  constructor(private dbl:ServicedemoService) { }
uname:any


  ngOnInit(): void {
  }
 
  hi(){
  this.uname=this.dbl.myemail;
  console.log(this.uname)
}
      
}
