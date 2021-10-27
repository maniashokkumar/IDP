import { Component, OnInit } from '@angular/core';
import { ServicedemoService } from '../servicedemo.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private aa:ServicedemoService) { }

  ngOnInit(): void {
  }
  servename=''
  xyz(){
    this.servename=this.aa.name2
  }
}
