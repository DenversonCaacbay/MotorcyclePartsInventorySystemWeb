import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { ReportComponent } from './report/report.component';
import { ReportCustomerComponent } from './report-customer/report-customer.component';
import { ReportItemComponent } from './report-item/report-item.component';
import { ReportVendorComponent } from './report-vendor/report-vendor.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'home', component:HomeComponent},

  {path: 'customer', component:CustomerComponent},
  {path: 'vendor', component:VendorComponent},
  {path: 'report', component:ReportComponent},

  {path: 'report-customer', component:ReportCustomerComponent},
  {path: 'report-vendor', component:ReportVendorComponent},
  {path: 'report-item', component:ReportItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
