import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'loan',
    component:LoanComponent,
    children:[
      {
        path:'payment',
        component:PaymentComponent
      }
    ]
  },
  
  {
    path: 'new-acc',
    component: NewAccComponent,
  },
  {
    path: 'check',
    component: CheckBalanceComponent,
  },
  {
    path:'**',
    component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
