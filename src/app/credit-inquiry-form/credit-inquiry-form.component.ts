import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CreditApplicationResult } from '../credit-application-result';
import { CreditInquiryFormService } from './credit-inquiry-form.service';

@Component({
    selector: 'credit-inquiry-form',
    templateUrl: './credit-inquiry-form.component.html',
    styleUrls: ['./credit-inquiry-form.component.css']
  })

  export class CreditInquiryForm implements OnInit{

    constructor(private creditInquiryService: CreditInquiryFormService,
      private formBuilder: FormBuilder){}


    inquiryForm = this.formBuilder.group({
      personalIdentificationNumber: "",
      birthDate: ""
  })

    response!: CreditApplicationResult;
    creditApplicationNotFound!: boolean;


    ngOnInit(): void {
    }
    

    getCreditResult() {
      const id = this.inquiryForm.value.personalIdentificationNumber;
      const birthdate = this.inquiryForm.value.birthDate;
      this.creditInquiryService.getCreditApplicationResult(id, birthdate).subscribe((data: CreditApplicationResult) => {
        if(data == null){
          this.creditApplicationNotFound = true;
        }
        else{
        this.response = {
        creditResult: data.creditResult,
        creditLimit:  data.creditLimit,
        }
    }},
    error => {
      this.creditApplicationNotFound = true;
    });
  }
  }