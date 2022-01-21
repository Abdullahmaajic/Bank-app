import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { PaymentComponent } from './payment/payment.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    PaymentComponent,
    NewAccComponent,
    CheckBalanceComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
