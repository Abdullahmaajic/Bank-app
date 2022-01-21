import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
})
export class LoanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  typeOfRate = ' '
  majorAmount = ' '
  years = ' '
  emi = ' '
  totalAmount = ' '
  typeRate(rate:any){
    this.typeOfRate = rate  
  }


  calculateAll(amount:any,years:any){
    this.majorAmount = amount
    console.log(this.majorAmount)
    this.years = years
    var a:any = this.typeOfRate
    //one month interest
    //in terms of month
    var totalMonths:any = years*12
    console.log(totalMonths)


    //total interest for a year
    var interstInMonths:any = (a/100)/12;
    console.log(interstInMonths)
    
    let A:any = ' '

    A = Math.floor(amount* ((interstInMonths *(Math.pow((1+interstInMonths),totalMonths))) )
     /  (Math.pow((1+interstInMonths),totalMonths) -1 ))
    this.emi = A
     console.log(A);
    // A = P (r (1+r)^n) / ( (1+r)^n -1 )

   //total amount payable
    var totalAmountPayable:any = A*12
    this.totalAmount = totalAmountPayable
    // console.log(totalAmountPayable)

  }
//  payment
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