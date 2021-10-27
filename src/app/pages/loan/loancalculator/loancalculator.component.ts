import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent implements OnInit {
  check1=10.5;
  
  constructor() { }
 
  selectedday=10.5;
  b:any = "";
  mydata:any="";
 
  selected(event:any){
    this.selectedday=event.target.value;
    console.log(this.selectedday)
  }
  abc(phone:any,tenure:any){
    console.log(phone,tenure,this.check1);
    var a=phone*tenure*this.check1
     this.b=a/100;
     
    console.log(this.b)
  }

  check(event:any){
      this.check1=event.target.value;
      console.log(this.check1)
  }
  
  ngOnInit(): void {
  }

  
}
