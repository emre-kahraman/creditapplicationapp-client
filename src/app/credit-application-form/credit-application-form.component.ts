import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CreditApplicationResult } from '../credit-application-result';
import { CreditApplicationFormService } from './credit-application-form.service';

@Component({
    selector: 'credit-application-form',
    templateUrl: './credit-application-form.component.html',
    styleUrls: ['./credit-application-form.component.css']
  })

  export class CreditApplicationForm implements OnInit{

    constructor(private creditApplicationService: CreditApplicationFormService,
      private formBuilder: FormBuilder){}

    applicationForm = this.formBuilder.group({
        personalIdentificationNumber: "",
        fullName: "",
        monthlyIncome: "",
        phone: "",
        birthDate: "",
        deposit: ""
    })

    response!: CreditApplicationResult;

    ngOnInit(): void {
    }
    
    submitForm() {
        console.log(this.applicationForm.value);
        this.creditApplicationService.submitCreditApplicationForm(this.applicationForm.value).subscribe((data: CreditApplicationResult) => this.response = {
          creditResult: data.creditResult,
          creditLimit:  data.creditLimit,
      });
    }

  }