import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  constructor() { }
name2=''
  xyx(myname1:any){
    alert("hi ");
    this.name2=myname1;
    console.log("hii"+this.name2)
   
  }
}
