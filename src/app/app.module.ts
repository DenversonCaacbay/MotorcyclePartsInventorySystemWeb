import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { ReportComponent } from './report/report.component';
import { ReportItemComponent } from './report-item/report-item.component';
import { ReportVendorComponent } from './report-vendor/report-vendor.component';
import { ReportCustomerComponent } from './report-customer/report-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    CustomerComponent,
    VendorComponent,
    ReportComponent,
    ReportItemComponent,
    ReportVendorComponent,
    ReportCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
