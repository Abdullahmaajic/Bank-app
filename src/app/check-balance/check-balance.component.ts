import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css'],
})
export class CheckBalanceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  verified:any = ' '
  totalPayment:any = ' '
  remaining:any = ' '
  paymentDone:any = ' '
  pay1:any = localStorage.getItem("phone")
  pay2:any = localStorage.getItem("acc")
  pay3:any = localStorage.getItem("upi")
  pay4:any = localStorage.getItem("initial")
  pay5:any = localStorage.getItem("remaining")
  paymentType = ' '

  pay(pay:any){
    this.paymentType = pay
    // console.log(this.pay5)
  }

  check(payment:any){
    var pay = payment
    // console.log(pay)
    // if(pay==this.pay1 ||pay==this.pay2 || pay==this.pay3){
    //   this.totalPayment = this.pay5
    //   this.verified = "Verified"
    //   this.remaining = this.pay5
    // }
    // else{
    //   alert("You entered the wrong inputs")
    // }
  }
  checkbalance(pay:any){
    if(pay==this.pay1 ||pay==this.pay2 || pay==this.pay3){
      this.totalPayment = this.pay5
      this.verified = "Verified"
    this.remaining = this.pay5
  }
  else{
      alert("You entered the wrong inputs")
      this.remaining = ' '
    }
}
}
