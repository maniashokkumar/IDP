import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  check1: any;
  check2: any;
  b: any;

  constructor() { }

  check(event:any){
    this.check1=event.target.value;
    console.log(this.check1)
    this.check2=event.target.id;
    console.log(this.check2)
}

calculate(principle:any,year:any){
  if(this.check2=="Recursion"){
    var a=principle*year*this.check1
    this.b=a/100;
    
   console.log(this.b)
  }
  else{
    alert("fixed")
  }
}
  ngOnInit(): void {
  }

}
