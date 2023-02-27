import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditApplicationForm } from './credit-application-form/credit-application-form.component';
import { CreditInquiryForm } from './credit-inquiry-form/credit-inquiry-form.component';

const routes: Routes = [
  { path: 'application', component: CreditApplicationForm, pathMatch: 'full'},
  { path: 'inquiry', component: CreditInquiryForm, pathMatch: 'full'},
  { path: '', redirectTo: "application", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
