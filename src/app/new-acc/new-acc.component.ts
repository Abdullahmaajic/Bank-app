import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-acc',
  templateUrl: './new-acc.component.html',
  styleUrls: ['./new-acc.component.css']
})
export class NewAccComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(name:any,phone:any,acc:any,upi:any,initial:any,remaining:any){
    localStorage.setItem("name",name)
    localStorage.setItem("phone",phone)
    localStorage.setItem("acc",acc)
    localStorage.setItem("upi",upi)
    localStorage.setItem("initial",initial)
    localStorage.setItem("remaining",remaining)
    
    }
}
