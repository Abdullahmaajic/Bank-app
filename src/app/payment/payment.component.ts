import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paymentSuccess:any = ' '
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
    if(pay==this.pay1 ||pay==this.pay2 || pay==this.pay3){
      this.totalPayment = this.pay5
    }
    else{
      alert("You have entered a wrong value")
    }
  }

  paydone(payamount:any){
    this.paymentDone = payamount
    this.remaining = this.totalPayment-this.paymentDone
    var a = this.remaining
    localStorage.setItem("remaining",a)
    this.paymentSuccess = "PAYMENT SUCCESS"
  }
}
