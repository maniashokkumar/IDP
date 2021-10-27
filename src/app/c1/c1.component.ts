import { Component, OnInit } from '@angular/core';
import { ServicedemoService } from '../servicedemo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private a:ServicedemoService) {

   }

  ngOnInit(): void {
  }
 
  abc(myname:any){
    this.a.xyx(myname)
    console.log(myname)
    
  }
}
