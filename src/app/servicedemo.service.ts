import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  constructor() { }


  myemail:any;
  abc(email:any){
    this.myemail=email;
    console.log(this.myemail)
  }

}
